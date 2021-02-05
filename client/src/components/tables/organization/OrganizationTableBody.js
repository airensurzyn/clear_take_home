import React from 'react';
import { TableBody } from '@material-ui/core';
import OrganizationTableRow from './OrganizationTableRow';

const OrganizationTableBody = (props) => {
	const {
		organizations,
		isLoading,
		setModal,
		modal,
		page,
		rowsPerPage,
	} = props;

	/*
	if (returns) {
			let sortedRows = stableSort(returns, getComparator(order, orderBy));
			let visibleSortedRows = sortedRows.slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			);

			let count = page * rowsPerPage;
			return visibleSortedRows.map((curr) => (
				<ReturnTableRow userReturn={curr} key={curr._id} count={(count += 1)} />
			));
		}
	*/

	const mapOrganizations = () => {
		if (organizations) {
			let visibleRows = organizations.slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			);
			return visibleRows.map((organization) => {
				return (
					<OrganizationTableRow
						key={organization.id}
						organization={organization}
						setModal={setModal}
						modal={modal}
					/>
				);
			});
		}
	};

	return (
		<TableBody>
			{organizations && !isLoading ? mapOrganizations() : ''}
		</TableBody>
	);
};

export default OrganizationTableBody;
