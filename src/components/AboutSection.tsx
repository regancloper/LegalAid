import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './aboutSection.module.scss';
import Video from './Video';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
	return (
		<div className={styles.section}>
			<Container>
				{/* <Row>
					<Col xs={12} md={3}>
						<div className={styles.header}>Learn About What We Do</div>
					</Col>
					<Col xs={12} md={9}>
						<Video
							videoSrcURL="https://www.youtube.com/embed/cqdo0l9R_30"
							videoTitle="About Us"
						/>
                    </Col>
				</Row> */}
				<Container>
					<h3 className={styles.header}>Learn About Our Organization.</h3>
					<div className={`${styles.text} mx-0 mx-md-5`}>
						Learn a bit more about the Legal Aid Society of Birmingham, and what
						each of its divisions do, by hearing from two Legal Aid Society
						attorneys, Cassie Velardie and Gustavo Heudebert, and social
						investigator Ashia Congress.
					</div>
					<div className="mx-0 mx-md-5">
						<Video
							videoSrcURL="https://www.youtube.com/embed/cqdo0l9R_30"
							videoTitle="About Us"
						/>
					</div>
				</Container>
			</Container>
		</div>
	);
};

export default AboutSection;
