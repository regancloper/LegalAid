import React from 'react';
import { graphql } from 'gatsby';
import { Container, Card } from 'react-bootstrap';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import articleStyles from './article.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface ArticleProps {
	data: {
		contentfulLegalAidNews: any;
	};
}

const Article: React.FC<ArticleProps> = ({ data }) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node: any) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return (
					<img src={url} alt={alt} width="300px" style={{ borderRadius: 15 }} />
				);
			},
		},
	};

	return (
		<Layout>
			<div className={articleStyles.container}>
				<Container>
					<div className="py-3 p-lg-5">
						<Card border="0" style={{ borderRadius: '15px' }}>
							<div className="mx-3 mx-md-5">
								<h3 className={articleStyles.heading}>
									{data.contentfulLegalAidNews.title}
								</h3>
								<Img
									fixed={data.contentfulLegalAidNews.picture.fixed}
									style={{ borderRadius: '15px' }}
								/>
								<div className={articleStyles.date}>
									{data.contentfulLegalAidNews.publishedDate}
								</div>
								<div className={articleStyles.content}>
									{documentToReactComponents(
										data.contentfulLegalAidNews.content.json,
										options
									)}
								</div>
							</div>
						</Card>
					</div>
				</Container>
			</div>
		</Layout>
	);
};

export default Article;

export const query = graphql`
	query($articleId: String!) {
		contentfulLegalAidNews(id: { eq: $articleId }) {
			id
			title
			content {
				json
			}
			picture {
				fixed(width: 300) {
					...GatsbyContentfulFixed
				}
			}
			publishedDate(formatString: "MMMM DD, YYYY")
		}
	}
`;
