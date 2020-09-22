import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';

import Head from '../components/head';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';
import boardStyles from './board.module.scss';

interface BoardPageProps {}

const BoardPage: React.FC<BoardPageProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			president: contentfulBoardMember(boardPosition: { eq: "President" }) {
				firstName
				lastName
				employer
			}
			vicePresident: contentfulBoardMember(
				boardPosition: { eq: "Vice President" }
			) {
				firstName
				lastName
				employer
			}
			secretary: contentfulBoardMember(
				boardPosition: { eq: "Secretary / Treasurer" }
			) {
				firstName
				lastName
				employer
			}
			members: allContentfulBoardMember(
				filter: { boardPosition: { eq: "Member" } }
				sort: { fields: lastName, order: ASC }
			) {
				nodes {
					firstName
					lastName
					employer
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Board of Trustees" />
			<Container>
				<PageHeader text="Board of Trustees" />
				<h4 className={boardStyles.header}>Executive Committee</h4>
				<Row className={boardStyles.row}>
					<Col xs={12}>
						<div className={boardStyles.title}>President</div>
						<div>
							{data.president.firstName} {data.president.lastName}
						</div>
						<div className={boardStyles.employer}>
							{data.president.employer}
						</div>
					</Col>
					<Col xs={12}>
						<div className={boardStyles.title}>Vice President</div>
						<div>
							{data.vicePresident.firstName} {data.vicePresident.lastName}
						</div>
						<div className={boardStyles.employer}>
							{data.vicePresident.employer}
						</div>
					</Col>
					<Col xs={12}>
						<div className={boardStyles.title}>Secretary / Treasurer</div>
						<div>
							{data.secretary.firstName} {data.secretary.lastName}
						</div>
						<div className={boardStyles.employer}>
							{data.secretary.employer}
						</div>
					</Col>
				</Row>
				<h4 className={boardStyles.header}>Members</h4>
				<Row
					className={boardStyles.membersRow}
					style={{ marginLeft: '15%', marginRight: '15%' }}
				>
					{data.members.nodes.map((member: any) => (
						<Col xs={12} sm={6} className={boardStyles.membersColumn}>
							<div>
								{member.firstName} {member.lastName}
							</div>
							<div className={boardStyles.employer}>{member.employer}</div>
						</Col>
					))}
					<Col xs={12} sm={6} className={boardStyles.membersColumn}>
						<div>Pooja Chawla</div>
						<div className={boardStyles.employer}>Pooja Chawla, P.C.</div>
					</Col>
					<Col xs={12} sm={6} className={boardStyles.membersColumn}>
						<div>Pooja Chawla</div>
						<div className={boardStyles.employer}>Pooja Chawla, P.C.</div>
					</Col>
					<Col xs={12} sm={6} className={boardStyles.membersColumn}>
						<div>Pooja Chawla</div>
						<div className={boardStyles.employer}>Pooja Chawla, P.C.</div>
					</Col>
					<Col xs={12} sm={6} className={boardStyles.membersColumn}>
						<div>Pooja Chawla</div>
						<div className={boardStyles.employer}>Pooja Chawla, P.C.</div>
					</Col>
					<Col xs={12} sm={6} className={boardStyles.membersColumn}>
						<div>Pooja Chawla</div>
						<div className={boardStyles.employer}>Pooja Chawla, P.C.</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default BoardPage;
