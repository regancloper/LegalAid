import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import ProductCard from './ProductCard';
import productsStyles from './products.module.scss';
import { StripeProducts } from '../../utils/types';
import DonationButton from '../DonationTypeButton';
import { Col, Container, Row } from 'react-bootstrap';

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
	const [oneTimeDonation, setOneTimeDonation] = useState(false);

	let oneTimePlan = '';

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
							id: { ne: "price_1HYzCkK9wC3K8MftNhNbxIEf" }
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
									statement_descriptor
								}
							}
						}
					}
					monthlyFlexible: stripePrice(
						id: { eq: "price_1HYzCkK9wC3K8MftNhNbxIEf" }
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
				}
			`}
			render={({
				oneTimeAmounts,
				monthlyAmounts,
				oneTimeFlexible,
				monthlyFlexible,
			}: StripeProducts) => {
				return (
					<Container>
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
							<Row>
								<Col xs={12} sm={6} lg={4} xl={3}>
									<ProductCard
										option={monthlyFlexible}
										recurring={true}
										flexible={true}
										planName="You Choose Plan"
									/>
								</Col>
								{monthlyAmounts.edges.map(({ node: option }) => (
									<Col xs={12} sm={6} lg={4} xl={3} key={option.id}>
										<ProductCard
											option={option}
											recurring={true}
											flexible={false}
											planName={option.product.statement_descriptor}
										/>
									</Col>
								))}
							</Row>
						) : (
							<Row>
								<Col xs={12} sm={6} lg={4} xl={3}>
									<ProductCard
										option={oneTimeFlexible}
										recurring={false}
										flexible={true}
										planName="You Choose"
									/>
								</Col>
								{oneTimeAmounts.edges.map(({ node: option }) => (
									<Col xs={12} sm={6} lg={4} xl={3} key={option.id}>
										<ProductCard
											option={option}
											recurring={false}
											flexible={false}
											planName={(oneTimePlan += '$')}
										/>
									</Col>
								))}
							</Row>
						)}
					</Container>
				);
			}}
		/>
	);
};

export default Products;
