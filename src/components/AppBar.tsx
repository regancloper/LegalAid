import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TemporaryDrawer from './TemporaryDrawer';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// @ts-ignore
import logo from '../images/logo.png';

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
		// boxShadow: '0px 0px',
		height: '5rem',
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
				<Toolbar>
					{/* <div style={{ width: '20vw' }}> */}
					<Link to="/">
						{/* <span>{data.logoImage.absolutePath}</span> */}
						{/* <Img fluid={data.logoImage.childImageSharp.fluid} /> */}
						<img
							src={logo}
							alt="Our logo"
							style={{ width: '250px', height: '5rem' }}
						/>
					</Link>
					<Link to="/donate">Donate</Link>
					<Link to="/people">People</Link>
					{/* </div> */}
					<TemporaryDrawer />
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default ButtonAppBar;
