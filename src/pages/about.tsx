import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = ({}) => {
	return (
		<Layout>
			<Head title="About" />
			<h1>The About Page</h1>
			<p>
				My name is Regan Loper. I'm a former bankruptcy attorney turned software
				engineer.
			</p>
			<p>
				Interested in working with me? <Link to="/contact">Reach out.</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
