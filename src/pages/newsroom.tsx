import React from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { graphql, Link, useStaticQuery } from 'gatsby';
import moment from 'moment';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';
import newsroomStyles from './newsroom.module.scss';

interface NewsroomPageProps {}

const NewsroomPage: React.FC<NewsroomPageProps> = () => {
	const newsData: NewsData = useStaticQuery(graphql`
		query {
			legalNews: allContentfulLegalAidNews {
				nodes {
					id
					__typename
					title
					publishedDate
					picture {
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
			publications: allContentfulPublication {
				nodes {
					id
					__typename
					title
					publishedDate
					externalUrl
				}
			}
			booksImage: file(relativePath: { eq: "books.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	// Creates an array of all news posts and publications, and sorts by publish date
	const newsArray = newsData.legalNews.nodes
		.concat(newsData.publications.nodes)
		.sort((a, b) => {
			return a.publishedDate < b.publishedDate ? 1 : -1;
		});

	return (
		<Layout>
			<SEO title="Newsroom" />
			<Container>
				<PageHeader text="Newsroom" />
				<div className={newsroomStyles.description}>
					Check out our organization's most recent articles, features on Legal
					Aid Society's attorneys, board, and staff, and relevant external
					publications for the legal aid community at large. Your one-stop
					location for all recent news and updates for the Legal Aid Society of
					Birmingham!
				</div>

				<Row>
					{newsArray.map(newsObject => (
						<Col xs={12} xl={6} key={newsObject.id}>
							{newsObject.__typename === 'ContentfulLegalAidNews' ? (
								<Link
									to={`/newsroom/${newsObject.title}`}
									className={newsroomStyles.link}
								>
									<div className="d-flex justify-content-center">
										<div className={newsroomStyles.picture}>
											<Img
												className={newsroomStyles.newsImage}
												fluid={newsObject.picture.fluid}
											/>
										</div>
									</div>

									<Card
										className={newsroomStyles.card}
										border="0"
										style={{ borderRadius: 0 }}
									>
										<Card.Body className="d-flex flex-column justify-content-between">
											<div>
												<Card.Title className={newsroomStyles.title}>
													{newsObject.title}
												</Card.Title>
												<Badge pill className={newsroomStyles.pill}>
													LAS News
												</Badge>
											</div>
											<div className="text-muted">
												{moment.utc(newsObject.publishedDate).format('LL')}
											</div>
										</Card.Body>
									</Card>
								</Link>
							) : (
								<a
									href={`${newsObject.externalUrl}`}
									className={newsroomStyles.link}
								>
									<div className="d-flex justify-content-center">
										<div className={newsroomStyles.picture}>
											<Img
												className={newsroomStyles.newsImage}
												fluid={newsData.booksImage.childImageSharp.fluid}
											/>
										</div>
									</div>
									<Card
										className={newsroomStyles.card}
										border="0"
										style={{ borderRadius: 0 }}
									>
										<Card.Body className="d-flex flex-column justify-content-between">
											<div>
												<Card.Title className={newsroomStyles.title}>
													{newsObject.title}
												</Card.Title>
												<Badge pill className={newsroomStyles.pill}>
													External Publication
												</Badge>
											</div>
											<div className="text-muted">
												{moment.utc(newsObject.publishedDate).format('LL')}
											</div>
										</Card.Body>
									</Card>
								</a>
							)}
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
};

export default NewsroomPage;

interface NewsDataObject {
	id: string;
	__typename: string;
	title: string;
	publishedDate: string;
	externalUrl?: string;
	picture?: any;
}

interface NewsData {
	legalNews: {
		nodes: NewsDataObject[];
	};
	publications: {
		nodes: NewsDataObject[];
	};
	booksImage: any;
}
