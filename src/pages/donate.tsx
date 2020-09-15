import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Products from '../components/Products/Products';
import donateStyles from './donate.module.scss';
import Head from '../components/head';

interface DonateProps {}

const Donate: React.FC<DonateProps> = ({}) => {
	return (
		<Layout>
			<Head title="Donate" />
			<h2 className={donateStyles.header}>Donate</h2>
			<Products />
			<Link to="/">Go to home page</Link>
		</Layout>
	);
};

export default Donate;
