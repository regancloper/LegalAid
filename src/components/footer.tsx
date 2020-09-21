import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PhoneIcon from '@material-ui/icons/Phone';
import ExploreIcon from '@material-ui/icons/Explore';

import footerStyles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className={footerStyles.footer}>
			<Container>
				<Row>
					<Col sm={6} md={5}>
						<div className={footerStyles.topLevel}>HOW TO REACH US</div>
						<p className={`${footerStyles.lowerLevel} mr-5`}>
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
						</p>
					</Col>
					<Col sm={6} md={3}>
						<div className={footerStyles.topLevel}>NAVIGATE</div>
						<ul className={footerStyles.list}>
							<Link className={footerStyles.link} to="/about">
								<li>Home</li>
							</Link>
							<Link className={footerStyles.link} to="/about">
								<li>Donate</li>
							</Link>
							<Link className={footerStyles.link} to="/about">
								<li>Our Services</li>
							</Link>
							<Link className={footerStyles.link} to="/about">
								<li>About</li>
							</Link>
							<Link className={footerStyles.link} to="/about">
								<li>Contact</li>
							</Link>
						</ul>
					</Col>
					<Col sm={6} md={4}>
						<div className={footerStyles.topLevel}>RECENT NEWS</div>
						<p className={footerStyles.lowerLevel}>
							<div className={footerStyles.newsItem}>
								<div className={footerStyles.articleTitle}>
									First Publication Title Goes Here: What It's About and Who Did
									What That Was Relevant
								</div>
								<small className={footerStyles.readMore}>Read More</small>
							</div>
							<div className={footerStyles.newsItem}>
								<div className={footerStyles.articleTitle}>
									Employee of the Month: Jequette Edmondson
								</div>
								<small className={footerStyles.readMore}>Read More</small>
							</div>
						</p>
					</Col>
				</Row>
				<p className={footerStyles.copyright}>
					&copy; Legal Aid Society of Birmingham
				</p>
				<p className={footerStyles.credit}>
					Built in Birmingham by RCL Web Design.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
