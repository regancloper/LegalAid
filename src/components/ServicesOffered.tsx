import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';

import servicesStyles from './servicesOffered.module.scss';

interface ServicesOfferedProps {}

const ServicesOffered: React.FC<ServicesOfferedProps> = () => {
	const [display, setDisplay] = useState('childAbuse');

	const imageData = useStaticQuery(graphql`
		query {
			childImage: file(relativePath: { eq: "kidsinfield.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			delinquencyImage: file(relativePath: { eq: "smilingkids.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			thirdImage: file(relativePath: { eq: "gavel.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			drugImage: file(relativePath: { eq: "beach.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<div className={servicesStyles.darkContainer}>
			<Container>
				<h3 className={servicesStyles.headerThree}>
					Services that we provide our clients.
				</h3>
				<div className={servicesStyles.servicesBlurb}>
					Our staff attorneys are court-appointed to assist people with their
					cases in the following service areas. Select a core service area to
					learn more:
				</div>
				<div className={servicesStyles.optionsPanel}>
					<Row>
						<Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
							<Button
								className={servicesStyles.button}
								onClick={() => setDisplay('childAbuse')}
								variant={display === 'childAbuse' ? 'secondary' : 'light'}
							>
								Child Protection and Child Custody
							</Button>
						</Col>
						<Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
							<Button
								className={servicesStyles.button}
								onClick={() => setDisplay('delinquency')}
								variant={display === 'delinquency' ? 'secondary' : 'light'}
							>
								Juvenile Delinquency
							</Button>
						</Col>
						<Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
							<Button
								className={servicesStyles.button}
								onClick={() => setDisplay('municipal')}
								variant={display === 'municipal' ? 'secondary' : 'light'}
							>
								Municipal Court
							</Button>
						</Col>
						<Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
							<Button
								className={servicesStyles.button}
								onClick={() => setDisplay('drug')}
								variant={display === 'drug' ? 'secondary' : 'light'}
							>
								Drug Court
							</Button>
						</Col>
					</Row>
				</div>
				<div
					className={`${servicesStyles.serviceDescription} ${
						display === 'childAbuse' ? 'd-block' : 'd-none'
					}`}
				>
					<Row>
						<Col xs={12} md={6}>
							<Img fluid={imageData.childImage.childImageSharp.fluid} />
						</Col>
						<Col xs={12} md={6}>
							<div className={servicesStyles.descriptionHeader}>
								Child Protection and Child Custody
							</div>
							<hr />
							<div>
								We serve as{' '}
								<span style={{ fontStyle: 'italic' }}>guardians ad litem</span>{' '}
								for children who are the subject of abuse and neglect
								(dependency) in the Jefferson County Family Court Birmingham and
								Bessemer Divisions.
							</div>
						</Col>
					</Row>
				</div>
				<div
					className={`${servicesStyles.serviceDescription} ${
						display === 'delinquency' ? 'd-block' : 'd-none'
					}`}
				>
					<Row>
						<Col xs={12} md={6}>
							<Img fluid={imageData.delinquencyImage.childImageSharp.fluid} />
						</Col>
						<Col xs={12} md={6}>
							<div className={servicesStyles.descriptionHeader}>
								Juvenile Delinquency
							</div>
							<hr />
							<div>
								At the Family Court of Jefferson County, both Birmingham and
								Bessemer Divisions, we represent children accused of delinquency
								offenses.
							</div>
						</Col>
					</Row>
				</div>
				<div
					className={`${servicesStyles.serviceDescription} ${
						display === 'municipal' ? 'd-block' : 'd-none'
					}`}
				>
					<Row>
						<Col xs={12} md={6}>
							<Img fluid={imageData.thirdImage.childImageSharp.fluid} />
						</Col>
						<Col xs={12} md={6}>
							<div className={servicesStyles.descriptionHeader}>
								Indigent Adults in Municipal Court
							</div>
							<hr />
							<div>
								We represent indigent adults in the municipal court of Tarrant.
								Please contact us if your municipality is interested in learning
								more about this service.
							</div>
						</Col>
					</Row>
				</div>
				<div
					className={`${servicesStyles.serviceDescription} ${
						display === 'drug' ? 'd-block' : 'd-none'
					}`}
				>
					<Row>
						<Col xs={12} md={6}>
							<Img fluid={imageData.drugImage.childImageSharp.fluid} />
						</Col>
						<Col xs={12} md={6}>
							<div className={servicesStyles.descriptionHeader}>
								Drug Court Program
							</div>
							<hr />
							<div>
								We represent defendants who have chosen to participate in
								rehabilitation services in the Jefferson County Drug Court
								Program.
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default ServicesOffered;
