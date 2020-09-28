import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import Header from './header';
import AppBar from './AppBar';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';
import { NewsData } from '../utils/types';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const newsData: NewsData = useStaticQuery(graphql`
		query {
			legalNews: allContentfulLegalAidNews {
				nodes {
					id
					__typename
					title
					publishedDate
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
		}
	`);

	// Creates an array of all news posts and publications, and sorts by publish date
	const newsArray = newsData.legalNews.nodes
		.concat(newsData.publications.nodes)
		.sort((a, b) => {
			return a.publishedDate < b.publishedDate ? 1 : -1;
		})
		.slice(0, 5);

	return (
		<div>
			<AppBar newsArray={newsArray} />
			<div className={layoutStyles.content}>{children}</div>
			<div className={layoutStyles.footer}>
				<Footer newsArray={newsArray.slice(0, 2)} />
			</div>
		</div>
	);
};

export default Layout;
