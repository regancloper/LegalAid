import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TemporaryDrawer from './TemporaryDrawer';
import { Link } from 'gatsby';

// @ts-ignore
import logo from '../images/logo.png';
import { Container } from '@material-ui/core';
import { NewsDataObject } from '../utils/types';

interface ButtonAppBarProps {
	newsArray: NewsDataObject[];
}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		// height: '5rem',
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
		// top: '113px',
		borderBottom: '1px solid #e5e5e5',
		justifyContent: 'center',
	},
});

const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ newsArray }) => {
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
			{/* <Banner /> */}
			<AppBar position="static" className={classes.header}>
				<Container>
					<Toolbar
						className="justify-content-between"
						style={{ paddingLeft: 0 }}
					>
						<Link to="/">
							<img
								src={logo}
								alt="Our logo"
								style={{ width: '235px', height: '66.2px' }}
							/>
						</Link>
						<TemporaryDrawer newsArray={newsArray} />
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default ButtonAppBar;
