import React, { useState } from 'react';
import getStripe from '../../utils/stripejs';
import { StripeNode } from '../../utils/types';
import cx from 'classnames';

import productCardStyles from './productcard.module.scss';

interface ProductCardProps {
	option: StripeNode;
	recurring: boolean;
	flexible: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
	option,
	recurring,
	flexible,
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
			successUrl: `${window.location.origin}/donate/`,
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
				<h4 style={{ padding: '1rem' }}>{option.product.name}</h4>
				{flexible && (
					<p>
						$
						<input
							required
							className={productCardStyles.input}
							placeholder="100"
							type="number"
							min="1"
							name="amtSelect"
						/>
					</p>
				)}
				<button
					disabled={loading}
					className={
						loading
							? cx(
									productCardStyles.buttonStyles,
									productCardStyles.buttonDisabledStyles
							  )
							: productCardStyles.buttonStyles
					}
				>
					Donate!
				</button>
			</div>
		</form>
	);
};

const formatPrice = (amount: number, currency: string) => {
	let price = Number((amount / 100).toFixed(2));
	let numberFormat = new Intl.NumberFormat(['en-US'], {
		style: 'currency',
		currency: currency,
		currencyDisplay: 'symbol',
	});
	return numberFormat.format(price);
};

export default ProductCard;
