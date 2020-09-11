import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
	return (
		<Layout>
			<Head title="Contact" />
			<h1>Contact Me</h1>
			<ul>
				<li>Phone: 404-317-3809</li>
				<li>Email: regan.c.loper@gmail.com</li>
			</ul>
			<p>
				Take a look at my{' '}
				<a href="https://github.com/regancloper" target="_blank">
					Github page
				</a>
				!
			</p>
		</Layout>
	);
};

export default ContactPage;
