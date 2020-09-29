import React from 'react';
import { graphql } from 'gatsby';
import { Badge, Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Layout from '../components/layout';
import staffMemberStyles from './staffMember.module.scss';

interface StaffMemberProps {
	data: {
		contentfulStaffMember: any;
	};
}

const StaffMember: React.FC<StaffMemberProps> = ({ data }) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node: any) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img src={url} alt={alt} />;
			},
		},
	};

	return (
		<Layout>
			<Container className={staffMemberStyles.body}>
				<Row className="mt-5">
					<Col xs={12} lg={5} className="mb-3">
						<Img
							fluid={data.contentfulStaffMember.picture.fluid}
							className={staffMemberStyles.picture}
						/>
					</Col>
					<Col xs={12} lg={7}>
						<div className={staffMemberStyles.name}>
							{data.contentfulStaffMember.firstName}{' '}
							{data.contentfulStaffMember.lastName}
						</div>
						<Badge pill className={staffMemberStyles.pill}>
							{data.contentfulStaffMember.position}
						</Badge>
						{data.contentfulStaffMember.email && (
							<div className={staffMemberStyles.email}>
								<MailOutlineIcon style={{ marginRight: 6 }} />
								{data.contentfulStaffMember.email}
							</div>
						)}
						<p className={staffMemberStyles.description}>
							{data.contentfulStaffMember.description.description}
						</p>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default StaffMember;

export const query = graphql`
	query($staffId: String!) {
		contentfulStaffMember(id: { eq: $staffId }) {
			id
			firstName
			lastName
			position
			email
			description {
				description
			}
			picture {
				fluid(maxWidth: 800) {
					...GatsbyContentfulFluid
				}
			}
		}
	}
`;
