import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../components/layout';
import Products from '../components/Products/Products';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import donateStyles from './donate.module.scss';

interface DonateProps {}

const Donate: React.FC<DonateProps> = () => {
	return (
		<Layout>
			<SEO title="Donate" />
			<Container>
				<PageHeader text="Donate" />
				<div className={donateStyles.description}>
					Your gifts, both large and small, will help us to achieve our mission
					of helping those affected by our cause. Thank you in advance for your
					generous support that allows us to make a difference in the lives of
					thousands of people and their families each year.
				</div>
				<Products />
			</Container>
		</Layout>
	);
};

export default Donate;
