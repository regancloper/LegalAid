import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '../components/head';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';
import storyStyles from './our-story.module.scss';

interface StoryPageProps {}

const StoryPage: React.FC<StoryPageProps> = () => {
	const storyData = useStaticQuery(graphql`
		query {
			contentfulAboutSection(title: { eq: "History" }) {
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
			<Head title="Our Story" />
			<Container>
				<PageHeader text="Our Story" />
				<div className={storyStyles.content}>
					{documentToReactComponents(
						storyData.contentfulAboutSection.content.json,
						options
					)}
				</div>
			</Container>
		</Layout>
	);
};

export default StoryPage;
