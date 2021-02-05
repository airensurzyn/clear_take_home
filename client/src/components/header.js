import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import colors from '../styles/colors';

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
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.logo}>
				CLEAR
			</Grid>
			<Grid item>Airen</Grid>
		</Grid>
	);
};

export default Header;
