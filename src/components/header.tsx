import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import headerStyles from './header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Navbar style={{ backgroundColor: 'lavender' }}>
			<Container>
				<Navbar.Brand>
					<Link className={headerStyles.brand} to="/">
						{data.site.siteMetadata.title}
					</Link>
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/blog"
					>
						Blog
					</Link>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/about"
					>
						About
					</Link>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/contact"
					>
						Contact
					</Link>
					<Link
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						to="/people"
					>
						People
					</Link>
				</Nav>
				<Nav>
					<FontAwesomeIcon icon={faShoppingBag} />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
