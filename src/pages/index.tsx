import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from 'gatsby-background-image';
import { Col, Container, Row } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
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
			secondImage: file(relativePath: { eq: "familyoncouch.jpg" }) {
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
			<SEO title="Home" />
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
						<Col md={6}>
							<h3 className={indexStyles.headerTwo}>
								Advocating justice for all for over 60 years.
							</h3>
						</Col>
					</Row>
					<hr className={indexStyles.hr} />

					<Row>
						<Col md={8} lg={6}>
							<p className={indexStyles.mainParas}>
								The Legal Aid Society of Birmingham is a non-profit law firm
								that represents children and low-income individuals who need
								representation in dependency, juvenile delinquency, misdemeanor,
								traffic and drug court cases.
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={8} lg={6}>
							<p className={indexStyles.mainParas}>
								The Legal Aid Society does not accept cases directly from the
								public, but rather by court appointment. Our staff attorneys at
								the Jefferson County Family Courts in Birmingham and Bessemer
								serve children as{' '}
								<span style={{ fontStyle: 'italic' }}>guardians ad litem</span>{' '}
								in abuse and neglect (dependency) cases and as defense counsel
								in juvenile delinquency cases. The Legal Aid Society's municipal
								court attorneys represent indigent adult defendants in the
								Tarrant Municipal Court. We also represent adult defendants in
								Jefferson County Drug Court who participate in rehabilitation
								services.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<ServicesOffered />
			<div>
				<BackgroundImage
					className={indexStyles.secondHero}
					fluid={imageData.secondImage.childImageSharp.fluid}
				>
					<Container>
						<Row>
							<Col className="d-none d-lg-block"></Col>
							<Col className="d-none d-lg-block"></Col>
							<Col className={indexStyles.aboutUsBox}>
								<div
									className={indexStyles.headerThree}
									style={{ color: '#fff' }}
								>
									Who We Are
								</div>
								<div className="mt-3">
									<Link to="/staff" style={{ marginBottom: '2em' }}>
										<RoundedButton text="Meet Our Staff" />
									</Link>
								</div>
								<div className="my-3">
									<Link to="/board">
										<RoundedButton text="Meet Our Board" />
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</BackgroundImage>
			</div>
		</Layout>
	);
};

export default IndexPage;
