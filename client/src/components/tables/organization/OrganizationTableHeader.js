import React from 'react';
import { TableHead, TableRow, TableCell, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	leftAlignedCell: {
		fontWeight: 'bold',
		textAlign: 'left',
		fontSize: '1rem',
	},
	centerAlignedCell: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: '1rem',
		width: '100px',
	},
}));

const OrganizationTableHeader = (props) => {
	const classes = useStyles();
	return (
		<TableHead className={classes.root}>
			<TableRow
				className={classes.tableHeaderRow}
				style={{ backgroundColor: '#e4ecfc' }}
			>
				<TableCell className={classes.leftAlignedCell}>Name</TableCell>
				<TableCell className={classes.centerAlignedCell}>Headcount</TableCell>
				<TableCell className={classes.centerAlignedCell}>Public</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default OrganizationTableHeader;
