import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import peopleStyles from './people.module.scss';

interface PeoplePageProps {}

const PeoplePage: React.FC<PeoplePageProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBoardMember(sort: { fields: createdAt, order: ASC }) {
				nodes {
					id
					name
					employer
					boardPosition
				}
			}
			allContentfulStaffMember {
				nodes {
					id
					fullName
					position
					email
					picture {
						fluid(maxWidth: 600) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Our People" />
			<Container>
				<h2 className={peopleStyles.staffHeader}>Our Staff</h2>
				<Row>
					{data.allContentfulStaffMember.nodes.map((node: any) => (
						<Col xs={6} md={4} lg={3} key={node.id} className="my-2">
							<Card border="0">
								<Img fluid={node.picture.fluid} />
								<div>{node.fullName}</div>
								<div>{node.position}</div>
								<small>{node.email}</small>
							</Card>
						</Col>
					))}
				</Row>
				<h2 className="text-center my-4">Board of Trustees</h2>
				<Row>
					{data.allContentfulBoardMember.nodes.map((node: any) => (
						<Col xs={6} md={4} lg={3} key={node.id} className="my-2">
							<Card border="0 shadow" style={{ height: '30vh' }}>
								<h3>{node.name}</h3>
								<p>{node.employer}</p>
								<p>{node.boardPosition}</p>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
};

export default PeoplePage;
