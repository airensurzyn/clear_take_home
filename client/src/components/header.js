import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import colors from '../styles/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'absolute',
		height: '70px',
		display: 'flex',
		backgroundColor: `${colors.gray}`,

		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		alignItems: 'center',
	},
	logo: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	logoButton: {
		fontWeight: 'bold',
		fontSize: '1.25rem',
		color: `${colors.purple}`,
		'&:hover': {
			backgroundColor: `${colors.gray}`,
		},
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.logo}>
				<Button
					disableRipple={true}
					component={Link}
					to={{
						pathname: '/',
					}}
					className={classes.logoButton}
				>
					CLEAR TAKE HOME
				</Button>
			</Grid>
			<Grid item>
				<Button
					disableRipple={true}
					component={Link}
					to={{
						pathname: '/',
					}}
					className={classes.logoButton}
				>
					HOME
				</Button>
			</Grid>
		</Grid>
	);
};

export default Header;
