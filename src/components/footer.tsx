import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@material-ui/icons/Phone';
import ExploreIcon from '@material-ui/icons/Explore';
import Img from 'gatsby-image';

import footerStyles from './footer.module.scss';
import { NewsDataObject } from '../utils/types';

interface FooterProps {
	newsArray: NewsDataObject[];
}

const Footer: React.FC<FooterProps> = ({ newsArray }) => {
	const imageData = useStaticQuery(graphql`
		query {
			uwca: file(relativePath: { eq: "united-way-logo.jpg" }) {
				childImageSharp {
					fixed(width: 160) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<footer className={footerStyles.footer}>
			<Container>
				<Row>
					<Col sm={6} md={5} lg={4}>
						<div className={footerStyles.topLevel}>HOW TO REACH US</div>
						<div className={`${footerStyles.lowerLevel} mr-5`}>
							<div className="my-4">
								<PhoneIcon className="mr-3" />
								<span style={{ fontSize: '1.1em' }}>(205) 325-5475</span>
							</div>
							<div className="mt-4">
								<ExploreIcon className="mr-3" />
								<span style={{ fontSize: '1.1em' }}>2001 Park Place</span>
								<div style={{ fontSize: '1.1em', marginLeft: 40 }}>
									Birmingham, AL 35203
								</div>
							</div>
						</div>
					</Col>
					<Col sm={6} md={3}>
						<div className={footerStyles.topLevel}>NAVIGATE</div>
						<ul className={footerStyles.list}>
							<Link className={footerStyles.link} to="/">
								<li>Home</li>
							</Link>
							<Link className={footerStyles.link} to="/donate">
								<li>Donate</li>
							</Link>
							<Link className={footerStyles.link} to="/services">
								<li>Our Services</li>
							</Link>
							<Link className={footerStyles.link} to="/our-story">
								<li>About</li>
							</Link>
							<Link className={footerStyles.link} to="/contact">
								<li>Contact</li>
							</Link>
						</ul>
					</Col>
					<Col sm={6} md={4}>
						<div className={footerStyles.topLevel}>RECENT NEWS</div>
						<div className={footerStyles.lowerLevel}>
							{newsArray.map((newsItem) => (
								<Link
									to="/newsroom"
									className={footerStyles.link}
									key={newsItem.id}
								>
									<div className={footerStyles.newsItem}>
										<div className={footerStyles.articleTitle}>
											{newsItem.title}
										</div>
										<small className={footerStyles.readMore}>Read More</small>
									</div>
								</Link>
							))}
						</div>
					</Col>
				</Row>
				<a href="https://www.uwca.org/" target="_blank" rel="noopener">
					<Img fixed={imageData.uwca.childImageSharp.fixed} />
				</a>
				<p className={footerStyles.copyright}>
					&copy; Legal Aid Society of Birmingham, 2023.
				</p>
				<p className={footerStyles.credit}>
					Built in Birmingham by RL Web Design.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
