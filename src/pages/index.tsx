import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from 'gatsby-background-image';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import indexStyles from './index.module.scss';
import RoundedButton from '../components/RoundedButton';
import ServicesOffered from '../components/ServicesOffered';

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			homeImage: file(relativePath: { eq: "kidssitting.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Home" />
			<div>
				<BackgroundImage
					className={indexStyles.hero}
					fluid={imageData.homeImage.childImageSharp.fluid}
				>
					<Container>
						<Row>
							<Col className="d-none d-lg-block"></Col>
							<Col className={`d-none d-lg-block ${indexStyles.textDiv}`}>
								<div className={indexStyles.imageText}>We Serve</div>
								<div className={indexStyles.imageSubtext}>
									We are court-appointed attorneys assisting people who need
									legal representation.
								</div>
								<div className="mt-4">
									<Link to="/donate">
										<RoundedButton text="Donate" />
									</Link>
								</div>
							</Col>
							<Col
								className="d-block d-lg-none rounded"
								style={{
									backgroundColor: 'rgba(0,0,0,0.5)',
									marginBottom: '8em',
								}}
							>
								<div className={indexStyles.lightImageText}>We Serve</div>
								<div className={indexStyles.lightImageSubtext}>
									We are court-appointed attorneys assisting people who need
									legal representation.
								</div>
								<div className={indexStyles.lightButton}>
									<Link to="/donate">
										<RoundedButton text="Donate" />
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</BackgroundImage>
			</div>
			<div className="mb-4">
				<Container>
					<Row>
						<Col md={5}>
							<h3 className={indexStyles.headerTwo}>
								We provide legal aid for those in need.
							</h3>
						</Col>
					</Row>
					<hr className={indexStyles.hr} />

					<Row>
						<Col md={8} lg={6}>
							<p className={indexStyles.mainParas}>
								We are a network of attorneys and staff that provide
								court-appointed legal aid for children and low-income
								individuals who need representation in family-law, juvenile
								delinquency, and drug court cases.
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={8} lg={6}>
							<p className={indexStyles.mainParas}>
								The Legal Aid Society does not accept cases directly from the
								public, but rather by court appointment. Our staff attorneys at
								the Jefferson County Family Courts in Birmingham and Bessemer
								serve children as guardians ad litem in abuse and neglect
								(dependency) cases and as defense counsel in juvenile
								delinquency cases. The Legal Aid Society's municipal court
								attorneys represent indigent adult defendants in the Tarrant
								Municipal Court. We also represent adult defendants in Jefferson
								County Drug Court who participate in rehabilitation services.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<ServicesOffered />
		</Layout>
	);
};

export default IndexPage;
