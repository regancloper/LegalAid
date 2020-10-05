import React, { useState } from 'react';
import getStripe from '../../utils/stripejs';
import { StripeNode } from '../../utils/types';

import productCardStyles from './productcard.module.scss';
import DonateButton from '../DonateButton';

interface ProductCardProps {
	option: StripeNode;
	recurring: boolean;
	flexible: boolean;
	planName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	option,
	recurring,
	flexible,
	planName,
}) => {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		const amount = flexible
			? Number(new FormData(event.target as HTMLFormElement).get('amtSelect'))
			: 1;
		const stripe = await getStripe();
		const { error } = await stripe.redirectToCheckout({
			mode: recurring ? 'subscription' : 'payment',
			lineItems: [{ price: option.id, quantity: amount }],
			successUrl: `${window.location.origin}/thankyou/`,
			cancelUrl: `${window.location.origin}/`,
		});
		if (error) {
			console.warn('Error:', error);
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={productCardStyles.cardStyles}>
				<div className={productCardStyles.cardHeader}>{planName}</div>
				{flexible ? (
					<p
						style={{ fontSize: '2em', margin: '0.85rem auto' }}
						className="d-flex justify-content-center"
					>
						$
						<input
							required
							className={
								recurring
									? productCardStyles.inputMonthly
									: productCardStyles.input
							}
							// placeholder="1"
							type="number"
							min="1"
							name="amtSelect"
						/>
						{recurring && '/ month'}
					</p>
				) : (
					<h4 style={{ padding: '1rem 0', fontSize: '2em' }}>
						{option.product.name}
					</h4>
				)}
			</div>
			<div className="d-flex justify-content-center">
				<DonateButton
					text={recurring ? 'Subscribe' : 'Give'}
					loading={loading}
				/>
			</div>
		</form>
	);
};

export default ProductCard;
