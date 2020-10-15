import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import RoundedButton from '../components/RoundedButton';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
	return (
		<Layout>
			<SEO title="404: Not Found" />
			<Container>
				<PageHeader text="Page Not Found" />
				<div className="w-25 mx-auto" style={{ marginBottom: '200px' }}>
					<Link to="/">
						<RoundedButton text="Go Home" />
					</Link>
				</div>
			</Container>
		</Layout>
	);
};

export default NotFound;
