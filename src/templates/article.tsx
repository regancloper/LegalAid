import React from 'react';
import { graphql } from 'gatsby';
import { Container, Card } from 'react-bootstrap';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import articleStyles from './article.module.scss';

interface ArticleProps {
	data: {
		contentfulLegalAidNews: any;
	};
}

const Article: React.FC<ArticleProps> = ({ data }) => {
	return (
		<Layout>
			<div className={articleStyles.container}>
				<Container className="px-lg-5">
					<div className="py-3 p-lg-5">
						<Card border="0" style={{ borderRadius: '15px' }}>
							<Img
								fluid={data.contentfulLegalAidNews.picture.fluid}
								style={{ borderRadius: '15px 15px 0px 0px' }}
							/>
							<Card.Body className="m-2 m-md-4">
								<Card.Title>{data.contentfulLegalAidNews.title}</Card.Title>
								<p style={{ color: '#6b8bbb' }}>
									{data.contentfulLegalAidNews.publishedDate}
								</p>
								{/* <p>{data.contentfulLegalAidNews.content}</p> */}
							</Card.Body>
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
			picture {
				fluid(maxWidth: 800) {
					...GatsbyContentfulFluid
				}
			}
			publishedDate(formatString: "MMMM DD, YYYY")
		}
	}
`;
