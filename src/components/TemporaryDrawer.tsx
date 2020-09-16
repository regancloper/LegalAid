import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	list: {
		width: '50vw',
		// height: '100vh',
		// backgroundColor: '#076666',
		// color: '#fff',
	},
	fullList: {
		width: 'auto',
	},
	menuButton: {
		// marginRight: theme.spacing(2),
		// position: 'absolute',
		// right: '2em', // envelope style button
		// top: '2.2em', // envelope style button
		// right: '1em', // regular style button
		// top: '0.75em', // regular style button
		// backgroundColor: '#0e385d',
		// backgroundColor: '#036380',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		color: '#fff',
		width: '3rem',
		height: '3rem',
		'&:hover': {
			// backgroundColor: '#d9d9d9',
			backgroundColor: '#6ab4ca',
			color: '#000',
		},
		'&:focus': {
			outline: 'none',
		},
	},
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

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

	const list = () => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<Link to="/donate">
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Donate" />
					</ListItem>
				</Link>
				<Link to="/people">
					<ListItem button>
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						<ListItemText primary="People" />
					</ListItem>
				</Link>
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
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
