import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Container, createStyles, IconButton, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Dropdown, ListGroup, NavItem, NavLink } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import MenuHeader from './MenuHeader';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		list: {
			[theme.breakpoints.down('xs')]: {
				width: '100vw',
			},
			[theme.breakpoints.up('sm')]: {
				width: 500,
			},
			minHeight: '100vh',
			backgroundColor: '#076666',
			color: '#fff',
		},
		fullList: {
			width: 'auto',
		},
		menuButton: {
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			color: '#fff',
			width: '3rem',
			height: '3rem',
			'&:hover': {
				backgroundColor: '#d9d9d9',
				// backgroundColor: '#6ab4ca',
				color: '#000',
			},
			'&:focus': {
				outline: 'none',
			},
		},
		header: {
			fontFamily: 'Abril Fatface',
			margin: '1.5em 0.5em 0.5em 0.5em',
			borderBottom: '1px solid white',
			paddingBottom: '0.5rem',
		},
		listGroup: {
			margin: '1em 1em',
		},
		listGroupItem: {
			fontFamily: 'Fira Sans, sans serif',
			backgroundColor: '#076666',
			letterSpacing: '2px',
			textTransform: 'uppercase',
			fontSize: '0.8rem',
			fontWeight: 700,
			borderColor: 'rgba(255, 255, 255, 0.2)',
			textDecoration: 'none',
			padding: '0.75rem 0',
			margin: '0 1.2em',
			borderTop: 'none',
			borderLeft: 'none',
			borderRight: 'none',
		},
		link: {
			textDecoration: 'none',
			color: 'white',
			'&:hover': {
				color: 'white',
				opacity: 0.6,
				textDecoration: 'none',
			},
		},
		chevron: {
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'space-between',
			'&:hover': {
				color: 'white',
				opacity: 0.6,
				textDecoration: 'none',
			},
		},
		chevronButton: {
			position: 'absolute',
			height: '3rem',
			top: '-1px',
			right: '0px',
		},
	})
);

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [aboutList, setAboutList] = React.useState(false);

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent
	) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setOpen(open);
	};

	const toggleAboutList = () => {
		setAboutList(!aboutList);
	};

	const list = () => (
		<div
			className={classes.list}
			role="presentation"
			onKeyDown={toggleDrawer(false)}
		>
			<div className="d-flex justify-content-end pr-3 pt-3">
				<CloseIcon
					onClick={toggleDrawer(false)}
					style={{ cursor: 'pointer' }}
				/>
			</div>
			<Container>
				<div className={classes.listGroup}>
					{/* <h2 className={classes.header}>Site Contents</h2> */}
					<MenuHeader text="Site Contents" />
					<ListGroup variant="flush">
						<Link to="/" className={classes.link} onClick={toggleDrawer(false)}>
							<ListGroup.Item className={classes.listGroupItem}>
								Home
							</ListGroup.Item>
						</Link>
						<Link
							to="/donate"
							className={classes.link}
							onClick={toggleDrawer(false)}
						>
							<ListGroup.Item className={classes.listGroupItem}>
								Donate
							</ListGroup.Item>
						</Link>
						<ListGroup.Item className={classes.listGroupItem}>
							Our Services
						</ListGroup.Item>
						<ListGroup.Item className={classes.listGroupItem}>
							<div className={classes.chevron} onClick={toggleAboutList}>
								About Us
								<div>
									{aboutList ? (
										<KeyboardArrowDownIcon className={classes.chevronButton} />
									) : (
										<ChevronRightIcon className={classes.chevronButton} />
									)}
								</div>
							</div>
						</ListGroup.Item>
						{aboutList && (
							<div>
								<Link
									to="/people"
									className={classes.link}
									onClick={toggleDrawer(false)}
								>
									<ListGroup.Item
										className={classes.listGroupItem}
										style={{ paddingLeft: '2em' }}
									>
										Our Story
									</ListGroup.Item>
								</Link>
								<Link to="/" className={classes.link}>
									<ListGroup.Item
										className={classes.listGroupItem}
										style={{ paddingLeft: '2em' }}
									>
										Mission
									</ListGroup.Item>
								</Link>
								<Link to="/" className={classes.link}>
									<ListGroup.Item
										className={classes.listGroupItem}
										style={{ paddingLeft: '2em' }}
									>
										Staff
									</ListGroup.Item>
								</Link>
								<Link to="/" className={classes.link}>
									<ListGroup.Item
										className={classes.listGroupItem}
										style={{ paddingLeft: '2em' }}
									>
										Board of Directors
									</ListGroup.Item>
								</Link>
							</div>
						)}
						<Link
							to="/people"
							className={classes.link}
							onClick={toggleDrawer(false)}
						>
							<ListGroup.Item className={classes.listGroupItem}>
								Our People
							</ListGroup.Item>
						</Link>
						<Link to="/contact" className={classes.link}>
							<ListGroup.Item className={classes.listGroupItem}>
								Contact Us
							</ListGroup.Item>
						</Link>
					</ListGroup>
					<MenuHeader text="Publications" />
				</div>
			</Container>
		</div>
	);

	return (
		<div>
			<IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				aria-label="menu"
				onClick={toggleDrawer(true)}
			>
				<MenuIcon style={{ fontSize: '1.1em' }} />
			</IconButton>
			<Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
				{list()}
			</Drawer>
		</div>
	);
}
