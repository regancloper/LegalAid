import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import PageHeader from '../components/PageHeader';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
	return (
		<Layout>
			<Head title="Contact" />
			<PageHeader text="Contact Us" />
		</Layout>
	);
};

export default ContactPage;
