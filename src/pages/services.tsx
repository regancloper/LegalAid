import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';
import servicesStyles from './services.module.scss';

interface ServicesPageProps {}

const ServicesPage: React.FC<ServicesPageProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			homeImage: file(relativePath: { eq: "family2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			bbvlp: file(relativePath: { eq: "bbvlp.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 1200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Our Legal Services" />
			<Container>
				<PageHeader text="Our Legal Services" />
				<h4 className={servicesStyles.header}>
					In Which Types of Cases Do You Offer Legal Help?
				</h4>
				<div className={servicesStyles.main}>
					<p>
						The Legal Aid Society's attorneys{' '}
						<span className="font-weight-bold">
							only accept cases by court appointment, and are not hired directly
							by members of the public who need legal assistance
						</span>
						. This means that we do not get involved in lawsuits until a court
						decides that an individual involved in a legal proceeding needs to
						be represented by a lawyer. As a result, the Legal Aid Society is
						not available for hire by the general public, including individuals
						who would like to file a lawsuit and defendants in civil cases who
						would like to have an attorney defend them.
					</p>
					<p>
						When our attorneys are appointed by judges to represent individuals
						in legal proceedings, they generally represent people in the
						following types of cases:
					</p>
					<ul>
						<li>
							<span style={{ fontWeight: 500, fontStyle: 'italic' }}>
								Child Abuse and Child Neglect Cases:
							</span>{' '}
							Our staff attorneys at the Jefferson County Family Courts in
							Birmingham and Bessemer serve children as{' '}
							<em>guardians ad litem</em> when those children do not otherwise
							have anyone to represent their interests.
						</li>
						<li>
							<span style={{ fontWeight: 500, fontStyle: 'italic' }}>
								Juvenile Delinquency Cases:
							</span>{' '}
							Our attorneys also serve as defense counsel in Birmingham and
							Bessemer courts when delinquency cases have been brought against
							juveniles.
						</li>
						<li>
							<span style={{ fontWeight: 500, fontStyle: 'italic' }}>
								Municipal Court Cases Against Indigent Defendants:
							</span>{' '}
							The Legal Aid Society's municipal court attorneys represent
							indigent adult defendants in the Tarrant Municipal Court.
						</li>
						<li>
							<span style={{ fontWeight: 500, fontStyle: 'italic' }}>
								Drug Court Cases:
							</span>{' '}
							Our staff attorneys also represent adult defendants in Jefferson
							County Drug Court who participate in rehabilitation services.
						</li>
					</ul>
				</div>
			</Container>
			<Img
				fluid={imageData.homeImage.childImageSharp.fluid}
				className={servicesStyles.image}
			/>
			<Container>
				<h4 className={servicesStyles.header}>
					What Other Organizations Offer Legal Help?
				</h4>
				<Row>
					<Col>
						<Img fluid={imageData.bbvlp.childImageSharp.fluid}></Img>
					</Col>
					<Col></Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default ServicesPage;
