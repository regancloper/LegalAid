import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import SEO from '../components/seo';
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
						<img
							src={url}
							alt={alt}
							width="300px"
							style={{ borderRadius: 15 }}
						/>
					</div>
				);
			},
			[BLOCKS.HEADING_1]: (node: any) => {
				return (
					<div
						style={{
							fontFamily: 'Abril Fatface, serif',
							fontSize: '2.5em',
							marginBottom: '0.3em',
						}}
					>
						{node.content[0].value}
					</div>
				);
			},
			[BLOCKS.HEADING_2]: (node: any) => {
				return (
					<div
						style={{
							fontFamily: 'Abril Fatface, serif',
							fontSize: '2em',
							marginBottom: '0.3em',
						}}
					>
						{node.content[0].value}
					</div>
				);
			},
			[BLOCKS.HEADING_3]: (node: any) => {
				return (
					<div
						style={{
							fontFamily: 'Abril Fatface, serif',
							fontSize: '2em',
							marginBottom: '0.3em',
						}}
					>
						{node.content[0].value}
					</div>
				);
			},
			[BLOCKS.HEADING_4]: (node: any) => {
				return (
					<div
						style={{
							fontFamily: 'Abril Fatface, serif',
							fontSize: '2em',
							marginBottom: '0.3em',
						}}
					>
						{node.content[0].value}
					</div>
				);
			},
		},
	};

	return (
		<Layout>
			<SEO title="Our Story" />
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
