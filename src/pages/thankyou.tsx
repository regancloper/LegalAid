import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import RoundedButton from '../components/RoundedButton';

interface ThankYouPageProps {}

const ThankYouPage: React.FC<ThankYouPageProps> = () => {
	return (
		<Layout>
			<SEO title="Thank You" />
			<Container>
				<PageHeader text="Thank You For Your Donation!" />
				<div
					className="d-flex justify-content-center"
					style={{ height: '30vh' }}
				>
					<div style={{ width: '250px' }}>
						<Link to="/">
							<RoundedButton text="Go Home" />
						</Link>
						<div className="p-2"></div>
						<Link to="/contact">
							<RoundedButton text="Contact Us" />
						</Link>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default ThankYouPage;
