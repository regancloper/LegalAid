import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ProductCard from './ProductCard';
import productsStyles from './products.module.scss';
import { StripeProducts } from '../../utils/types';
import DonationButton from '../DonationButton';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
	const [oneTimeDonation, setOneTimeDonation] = useState(false);

	return (
		<StaticQuery
			query={graphql`
				query ProductPrices {
					oneTimeAmounts: allStripePrice(
						filter: {
							recurring: { interval: { eq: null } }
							product: { active: { eq: true } }
							id: { ne: "price_1HRIelK9wC3K8Mfty2n0kRtI" }
						}
						sort: { fields: [unit_amount] }
					) {
						edges {
							node {
								id
								active
								currency
								unit_amount
								product {
									id
									name
									active
								}
							}
						}
					}
					oneTimeFlexible: stripePrice(
						id: { eq: "price_1HRIelK9wC3K8Mfty2n0kRtI" }
					) {
						id
						active
						currency
						unit_amount
						product {
							id
							name
						}
					}
					monthlyAmounts: allStripePrice(
						filter: {
							recurring: { interval: { eq: "month" } }
							product: { active: { eq: true } }
						}
						sort: { fields: [unit_amount] }
					) {
						edges {
							node {
								id
								active
								currency
								unit_amount
								product {
									id
									name
								}
							}
						}
					}
				}
			`}
			render={({
				oneTimeAmounts,
				monthlyAmounts,
				oneTimeFlexible,
			}: StripeProducts) => {
				return (
					<div>
						{/* Buttons that control donation type */}
						<div className={productsStyles.donationSelector}>
							<div className="d-block d-md-inline">
								<DonationButton
									text="Monthly"
									active={!oneTimeDonation}
									setOneTimeDonation={setOneTimeDonation}
								/>
							</div>
							<div className="d-block d-md-inline">
								<DonationButton
									text="Once"
									active={oneTimeDonation}
									setOneTimeDonation={setOneTimeDonation}
								/>
							</div>
						</div>
						{!oneTimeDonation ? (
							<div className={productsStyles.container}>
								{monthlyAmounts.edges.map(({ node: option }) => (
									<ProductCard
										key={option.id}
										option={option}
										recurring={true}
										flexible={false}
									/>
								))}
							</div>
						) : (
							<div className={productsStyles.container}>
								{oneTimeAmounts.edges.map(({ node: option }) => (
									<ProductCard
										key={option.id}
										option={option}
										recurring={false}
										flexible={false}
									/>
								))}
								<ProductCard
									option={oneTimeFlexible}
									recurring={false}
									flexible={true}
								/>
							</div>
						)}
					</div>
				);
			}}
		/>
	);
};

export default Products;
