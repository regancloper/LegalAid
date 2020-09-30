import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import staffStyles from './staff.module.scss';
import PageHeader from '../components/PageHeader';

interface StaffPageProps {}

const StaffPage: React.FC<StaffPageProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			administrative: allContentfulStaffMember(
				filter: { team: { eq: "Administrative" } }
			) {
				nodes {
					id
					lastName
					firstName
					position
					picture {
						fluid(maxWidth: 1000, maxHeight: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
			delinquency: allContentfulStaffMember(
				filter: { team: { eq: "Delinquency Defender" } }
				sort: { fields: lastName }
			) {
				nodes {
					id
					lastName
					firstName
					position
					picture {
						fluid(maxWidth: 1000, maxHeight: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
			children: allContentfulStaffMember(
				filter: { team: { eq: "Child Protection and Child Custody" } }
				sort: { fields: lastName }
			) {
				nodes {
					id
					lastName
					firstName
					position
					picture {
						fluid(maxWidth: 1000, maxHeight: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
			support: allContentfulStaffMember(
				filter: { team: { eq: "Support" } }
				sort: { fields: lastName }
			) {
				nodes {
					id
					lastName
					firstName
					position
					picture {
						fluid(maxWidth: 1000, maxHeight: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Our Staff" />
			<Container>
				<PageHeader text="Our Staff" />
				<h5 className={staffStyles.staffSubheader}>Administrative Team</h5>
				<Row>
					{data.administrative.nodes.map((node: any) => (
						<Col
							xs={12}
							md={6}
							lg={4}
							key={node.id}
							className="my-2 d-flex justify-content-center"
						>
							<Link
								to={`/staff/${node.firstName}-${node.lastName}`}
								className={staffStyles.link}
							>
								<Card border="0" className={staffStyles.card}>
									<Img fluid={node.picture.fluid} />
									<div className={staffStyles.pictureText}>
										<div className={staffStyles.employeeName}>
											{node.firstName} {node.lastName}
										</div>
										<div className={staffStyles.employeePosition}>
											{node.position}
										</div>
									</div>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
				<h5 className={staffStyles.staffSubheader}>
					Delinquency Defender Team
				</h5>
				<Row>
					{data.delinquency.nodes.map((node: any) => (
						<Col
							xs={12}
							md={6}
							lg={4}
							key={node.id}
							className="my-2 d-flex justify-content-center"
						>
							<Link
								to={`/staff/${node.firstName}-${node.lastName}`}
								className={staffStyles.link}
							>
								<Card border="0" className={staffStyles.card}>
									<Img fluid={node.picture.fluid} />
									<div className={staffStyles.pictureText}>
										<div className={staffStyles.employeeName}>
											{node.firstName} {node.lastName}
										</div>
										<div className={staffStyles.employeePosition}>
											{node.position}
										</div>
									</div>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
				<h5 className={staffStyles.staffSubheader}>
					Child Protection and Child Custody Team
				</h5>
				<Row>
					{data.children.nodes.map((node: any) => (
						<Col
							xs={12}
							md={6}
							lg={4}
							key={node.id}
							className="my-2 d-flex justify-content-center"
						>
							<Link
								to={`/staff/${node.firstName}-${node.lastName}`}
								className={staffStyles.link}
							>
								<Card border="0" className={staffStyles.card}>
									<Img fluid={node.picture.fluid} />
									<div className={staffStyles.pictureText}>
										<div className={staffStyles.employeeName}>
											{node.firstName} {node.lastName}
										</div>
										<div className={staffStyles.employeePosition}>
											{node.position}
										</div>
									</div>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
				<h5 className={staffStyles.staffSubheader}>Support Team</h5>
				<Row>
					{data.support.nodes.map((node: any) => (
						<Col
							xs={12}
							md={6}
							lg={4}
							key={node.id}
							className="my-2 d-flex justify-content-center"
						>
							<Link
								to={`/staff/${node.firstName}-${node.lastName}`}
								className={staffStyles.link}
							>
								<Card border="0" className={staffStyles.card}>
									<Img fluid={node.picture.fluid} />
									<div className={staffStyles.pictureText}>
										<div className={staffStyles.employeeName}>
											{node.firstName} {node.lastName}
										</div>
										<div className={staffStyles.employeePosition}>
											{node.position}
										</div>
									</div>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
};

export default StaffPage;
