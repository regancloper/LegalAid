import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
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
			bbvlp: file(relativePath: { eq: "vlbLogo.png" }) {
				childImageSharp {
					fixed(width: 300) {
						...GatsbyImageSharpFixed
					}
				}
			}
			lsa: file(relativePath: { eq: "LSALogo.png" }) {
				childImageSharp {
					fixed(width: 300) {
						...GatsbyImageSharpFixed
					}
				}
			}
			asb: file(relativePath: { eq: "asb.jpg" }) {
				childImageSharp {
					fixed(width: 150) {
						...GatsbyImageSharpFixed
					}
				}
			}
			uwaaa: file(relativePath: { eq: "uwaaa-logo.png" }) {
				childImageSharp {
					fixed(width: 130) {
						...GatsbyImageSharpFixed
					}
				}
			}
			bba: file(relativePath: { eq: "bba_logo.png" }) {
				childImageSharp {
					fixed(width: 250) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="Our Legal Services" />
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
				<Row className="mb-5">
					<Col xs={12} md={6} xl={4}>
						<a href="https://vlbham.org/" className={servicesStyles.link}>
							<Card className={servicesStyles.card}>
								<Img
									fixed={imageData.bbvlp.childImageSharp.fixed}
									style={{ margin: '1.2em auto -0.5em auto' }}
								></Img>
								<Card.Body>
									Volunteer Lawyers Birmingham serves low-income clients by
									utilizing legal Help Desks in Birmingham, and manages a pro
									bono representation program for clients whose issues cannot be
									solved in a one-time Help Desk engagement. Their legal
									services focus on four tenets: Safe Families, Safe Housing,
									Safe Finances, and Serving Veterans.
								</Card.Body>
							</Card>
						</a>
					</Col>
					<Col xs={12} md={6} xl={4}>
						<a
							href="https://legalservicesalabama.org/"
							className={servicesStyles.link}
						>
							<Card className={servicesStyles.card}>
								<Img
									fixed={imageData.lsa.childImageSharp.fixed}
									style={{ margin: '2.5em auto 0.6em auto' }}
								></Img>
								<Card.Body>
									Legal Services Alabama is a non-profit law firm providing free
									civil legal assistance to low-income Alabamians who cannot pay
									for a lawyer. They only handle civil cases, and only for
									people whose income is not more than 125% of the federal
									poverty level. They have offices in Anniston, Birmingham,
									Dothan, Huntsville, Mobile, Montgomery, Selma, and Tuscaloosa.
								</Card.Body>
							</Card>
						</a>
					</Col>
					<Col xs={12} md={6} xl={4}>
						<a
							href="https://www.alabar.org/for-the-public/get-legal-help/"
							className={servicesStyles.link}
						>
							<Card className={servicesStyles.card}>
								<Img
									fixed={imageData.asb.childImageSharp.fixed}
									style={{ margin: '0.5em auto -0.5em auto' }}
								></Img>
								<Card.Body>
									The Alabama State Bar Association offers a Lawyer Referral
									Service, which is a program designed to assist the public in
									locating an attorney who can be retained to assist with their
									general legal needs. Attorneys who participate in the Referrel
									Service agree to charge not more than $50 for an initial 30
									minute consultation, and then negotiate a fee after the
									consultation.
								</Card.Body>
							</Card>
						</a>
					</Col>
					<Col xs={12} md={6} xl={4}>
						<a href="https://www.uwaaa.org/" className={servicesStyles.link}>
							<Card className={servicesStyles.card}>
								<Img
									fixed={imageData.uwaaa.childImageSharp.fixed}
									style={{ margin: '1.2em auto -0.5em auto' }}
								></Img>
								<Card.Body>
									Working with the Alabama Department of Senior Services, the
									United Way Area Agency on Aging (UWAAA) of Jefferson County
									provides services focused on the needs of elderly persons. The
									UWAAA distributes funds for the provision of services, and has
									a number of programs available to senior citizens, people with
									disabilities, and caregivers.
								</Card.Body>
							</Card>
						</a>
					</Col>
					<Col xs={12} md={6} xl={4}>
						<a
							href="https://birminghambar.org/page/Public_LawyerConnect"
							className={servicesStyles.link}
						>
							<Card className={servicesStyles.card}>
								<Img
									fixed={imageData.bba.childImageSharp.fixed}
									style={{ margin: '4.5em auto 1.8em auto' }}
								></Img>
								<Card.Body>
									The Birmingham Bar Association's Lawyer Referral Service is a
									public service that connects citizens with pre-screened and
									experienced attorneys free of charge (the participating
									attorneys do charge for their services). During the initial
									consultation, you will discuss legal fees required to handle
									your matter, but there is no obligation on your part to retain
									a particular lawyer.
								</Card.Body>
							</Card>
						</a>
					</Col>
				</Row>
			</Container>
			<Container>
				<h4 className={servicesStyles.header}>
					How Does Legal Aid Society Benefit the Community?
				</h4>
				<Row className="mb-5">
					<Col xs={12} md={6}>
						<Card className={servicesStyles.benefitCard}>
							<Card.Body>
								<Card.Title className={servicesStyles.cardTitle}>
									We Benefit People in Need
								</Card.Title>
								<Card.Text>
									Children removed from abusive homes, caught in the middle of a
									custody battle, or accused of crimes, and adults facing
									potential jail sentences, frequently have no means to secure
									legal representation. By providing these individuals with
									attorneys to guide and advise them through the legal system,
									the legal rights of these persons are protected.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6}>
						<Card className={servicesStyles.benefitCard}>
							<Card.Body>
								<Card.Title className={servicesStyles.cardTitle}>
									We Benefit the Court System
								</Card.Title>
								<Card.Text>
									By providing an attorney who is physically present in the
									courtroom and who has expertise in the legal issues that
									regularly arise in that particular court, judges may utilize
									Legal Aid as an alternative to identifying, training, and
									appointing private counsel for those persons legally entitled
									to free representation.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6}>
						<Card className={servicesStyles.benefitCard}>
							<Card.Body>
								<Card.Title className={servicesStyles.cardTitle}>
									We Benefit the Legal Community
								</Card.Title>
								<Card.Text>
									Although many lawyers in private practice regularly accept
									appointment to some indigent cases as their professional
									obligation, in some courts there are not a sufficient number
									of these attorneys to provide legal representation for the
									large numbers of indigent persons requiring appointed counsel.
									The availability of Legal Aid lawyers to handle these cases
									insures that all citizens who are eligible for free
									representation have access to a lawyer.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6}>
						<Card className={servicesStyles.benefitCard}>
							<Card.Body>
								<Card.Title className={servicesStyles.cardTitle}>
									We Benefit Taxpayers
								</Card.Title>
								<Card.Text>
									Legal Aid can provide legal services at a rate substantially
									below the hourly rates of members of the private bar for
									several key reasons: the accessibility of its lawyers, who are
									always present during the day-to-day operations of the court,
									the familiarity of those lawyers with the issues, procedure,
									and personnel of those courts, the capability of its lawyers
									to handle individual cases without regard to hourly billing
									and business profits, and the commitment of these lawyers to
									quality legal representation for the poor.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default ServicesPage;
