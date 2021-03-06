import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from '../components/seo';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';
import missionStyles from './mission.module.scss';

interface MissionPageProps {}

const MissionPage: React.FC<MissionPageProps> = () => {
	const missionData = useStaticQuery(graphql`
		query {
			contentfulAboutSection(title: { eq: "Mission" }) {
				content {
					json
				}
			}
		}
	`);

	const options = {
		renderNode: {
			'embedded-asset-block': (node: any) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return (
					<div className="d-flex justify-content-center">
						<img src={url} alt={alt} width="40%" />
					</div>
				);
			},
		},
	};

	return (
		<Layout>
			<SEO title="Our Mission" />
			<Container>
				<PageHeader text="Our Mission" />
				<div className={missionStyles.content}>
					{documentToReactComponents(
						missionData.contentfulAboutSection.content.json,
						options
					)}
				</div>
			</Container>
		</Layout>
	);
};

export default MissionPage;
