import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
	tableTitleRow: {
		display: 'flex',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	mapButton: {
		border: `1px solid ${colors.purple}`,
		color: `${colors.purple}`,
	},
}));

const DashboardTitle = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.tableTitleRow}>
			<Grid item className={classes.title}>
				<h2>Partner Organizations</h2>
			</Grid>
			<Grid item>
				<Button
					className={classes.mapButton}
					disableRipple={true}
					component={Link}
					to={{
						pathname: '/map',
					}}
				>
					View Org Map
				</Button>
			</Grid>
		</Grid>
	);
};
export default DashboardTitle;
