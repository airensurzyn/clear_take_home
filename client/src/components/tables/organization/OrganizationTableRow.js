import React from 'react';
import { TableRow, TableCell, Checkbox, makeStyles } from '@material-ui/core';
import colors from '../../../styles/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: `${colors.gray}`,
		},
	},
	centerAlignedCell: {
		textAlign: 'center',
		width: '100px',
	},
}));

const OrganizationTableRow = (props) => {
	const { organization, setModal } = props;
	const classes = useStyles();

	const handleOrganizationRowSelect = (e) => {
		setModal({ isOpen: true, organizationId: organization.id });
	};

	return (
		<TableRow
			className={classes.root}
			onClick={(e) => handleOrganizationRowSelect(e)}
		>
			<TableCell>{organization.name}</TableCell>
			<TableCell className={classes.centerAlignedCell}>
				{organization.headcount}
			</TableCell>
			<TableCell className={classes.centerAlignedCell}>
				<Checkbox
					checked={organization.is_public}
					style={{
						color: `${colors.purple}`,
					}}
				/>
			</TableCell>
		</TableRow>
	);
};

export default OrganizationTableRow;
