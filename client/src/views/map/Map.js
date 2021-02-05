import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MapGraphic from '../../components/maps/Map';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '20px',
	},
}));

const Map = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<MapGraphic />
		</Grid>
	);
};
export default Map;
