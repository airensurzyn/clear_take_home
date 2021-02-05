import React, { useState } from 'react';
import { Table, TablePagination, makeStyles } from '@material-ui/core';
import OrganizationTableHeader from './OrganizationTableHeader';
import OrganizationTableBody from './OrganizationTableBody';

const useStyles = makeStyles((theme) => ({
	root: { minWidth: '600px' },
}));

const OrganizationTable = (props) => {
	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [page, setPage] = useState(0);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const { organizations, isLoading, modal, setModal } = props;
	return (
		<>
			<Table className={classes.root}>
				<OrganizationTableHeader />
				<OrganizationTableBody
					organizations={organizations}
					isLoading={isLoading}
					setModal={setModal}
					modal={modal}
					page={page}
					rowsPerPage={rowsPerPage}
				/>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10]}
				count={organizations.length}
				page={page}
				rowsPerPage={rowsPerPage}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</>
	);
};

export default OrganizationTable;
