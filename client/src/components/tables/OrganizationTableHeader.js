import React from 'react';
import { TableHead, TableRow, TableCell, makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
	leftAlignedCell: {
		fontWeight: 'bold',
		textAlign: 'left',
		color: `${colors.purple}`,
	},
	centerAlignedCell: {
		fontWeight: 'bold',
		textAlign: 'center',
		color: `${colors.purple}`,
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
