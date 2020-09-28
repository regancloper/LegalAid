import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TemporaryDrawer from './TemporaryDrawer';
import { graphql, Link, useStaticQuery } from 'gatsby';

// @ts-ignore
import logo from '../images/logo.png';
import { Container } from '@material-ui/core';

interface ButtonAppBarProps {}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		height: '5rem',
	},

	title: {
		flexGrow: 1,
	},
	header: {
		// backgroundColor: '#f5f5f5',
		backgroundColor: '#fff',
		color: '#303030',
		boxShadow: '0px 0px',
		height: '6rem',
		// borderBottom: '1px solid #b6c3cc',
		justifyContent: 'center',
	},
});

const ButtonAppBar: React.FC<ButtonAppBarProps> = () => {
	const classes = useStyles();
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		logoImage: file(relativePath: { eq: "logo.png" }) {
	// 			childImageSharp {
	// 				fluid(maxWidth: 800) {
	// 					...GatsbyImageSharpFluid
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.header}>
				<Container>
					<Toolbar className="justify-content-between">
						<Link to="/">
							<img
								src={logo}
								alt="Our logo"
								style={{ width: '230px', height: '4.5rem' }}
							/>
						</Link>
						<TemporaryDrawer />
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default ButtonAppBar;
