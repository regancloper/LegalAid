import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@material-ui/icons/Phone';
import ExploreIcon from '@material-ui/icons/Explore';

import footerStyles from './footer.module.scss';
import { NewsDataObject } from '../utils/types';

interface FooterProps {
	newsArray: NewsDataObject[];
}

const Footer: React.FC<FooterProps> = ({ newsArray }) => {
	return (
		<footer className={footerStyles.footer}>
			<Container>
				<Row>
					<Col sm={6} md={5} lg={4}>
						<div className={footerStyles.topLevel}>HOW TO REACH US</div>
						<div className={`${footerStyles.lowerLevel} mr-5`}>
							<div className="my-4">
								<PhoneIcon className="mr-3" />
								<span style={{ fontSize: '1.1em' }}>(205) 251-3516</span>
							</div>
							<div className="mt-4">
								<ExploreIcon className="mr-3" />
								<span style={{ fontSize: '1.1em' }}>2021 2nd Ave. N.</span>
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
							{newsArray.map(newsItem => (
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
				<p className={footerStyles.copyright}>
					&copy; Legal Aid Society of Birmingham, 2020.
				</p>
				<p className={footerStyles.credit}>
					Built in Birmingham by RL Web Design.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
