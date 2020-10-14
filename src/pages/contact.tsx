import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFax, faPhone } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import contactStyles from './contact.module.scss';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
	return (
		<Layout>
			<SEO title="Contact" />
			<Container>
				<PageHeader text="Contact Us" />
				<Row>
					<Col xs={12} md={6} lg={4}>
						<div className={contactStyles.addressCard}>
							<div className={contactStyles.addressTitle}>
								Administrative &amp; Municipal Courts Office
							</div>
							<div className={contactStyles.cardContent}>
								<div>2021 2nd Avenue North</div>
								<div>Birmingham, AL 35203</div>
								<div>
									<FontAwesomeIcon icon={faPhone} style={{ marginRight: 11 }} />{' '}
									(205) 251-3516
								</div>
								<div>
									<FontAwesomeIcon icon={faFax} style={{ marginRight: 15 }} />
									(205) 328-4905
								</div>
							</div>
						</div>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<div className={contactStyles.addressCard}>
							<div className={contactStyles.addressTitle}>
								Family Court <br />
								(Birmingham)
							</div>
							<div className={contactStyles.cardContent}>
								<div>120 North Second Court</div>
								<div>Birmingham, AL 35204-4765</div>
								<div>
									<FontAwesomeIcon icon={faPhone} style={{ marginRight: 11 }} />{' '}
									(205) 325-5474
								</div>
								<div>
									<FontAwesomeIcon icon={faFax} style={{ marginRight: 15 }} />
									(205) 325-5642
								</div>
							</div>
						</div>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<div className={contactStyles.addressCard}>
							<div className={contactStyles.addressTitle}>
								Family Court <br />
								(Bessemer)
							</div>
							<div className={contactStyles.cardContent}>
								<div>1801 North 3rd Avenue</div>
								<div>Bessemer, AL 35020-4907</div>
								<div>
									<FontAwesomeIcon icon={faPhone} style={{ marginRight: 11 }} />{' '}
									(205) 744-3576
								</div>
								<div>
									<FontAwesomeIcon icon={faFax} style={{ marginRight: 15 }} />
									(205) 481-4103
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default ContactPage;
