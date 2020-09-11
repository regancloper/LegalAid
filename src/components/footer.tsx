import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);

	return (
		<footer className={footerStyles.footer}>
			<p>Created by {data.site.siteMetadata.author}, © 2020</p>
		</footer>
	);
};

export default Footer;
