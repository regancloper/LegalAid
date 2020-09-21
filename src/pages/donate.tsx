import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Products from '../components/Products/Products';
import Head from '../components/head';
import PageHeader from '../components/PageHeader';
import { Container } from 'react-bootstrap';

interface DonateProps {}

const Donate: React.FC<DonateProps> = ({}) => {
	return (
		<Layout>
			<Head title="Donate" />
			<Container>
				<PageHeader text="Donate" />
				<Products />
				<Link to="/">Go to home page</Link>
			</Container>
		</Layout>
	);
};

export default Donate;
