import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
	return (
		<Layout>
			<SEO title="404: Not Found" />
			<h1>Page Not Found</h1>
			<p>
				<Link to="/">Back to home</Link>
			</p>
		</Layout>
	);
};

export default NotFound;
