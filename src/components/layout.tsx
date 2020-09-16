import React from 'react';
import { Container } from 'react-bootstrap';

// import Header from './header';
import AppBar from './AppBar';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<AppBar />
			<div className={layoutStyles.content}>{children}</div>
			<div className={layoutStyles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
