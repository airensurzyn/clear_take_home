import React from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

const OrganizationModalTable = ({ organization }) => {
	return (
		<Table>
			<TableBody>
				<TableRow>
					<TableCell>Name: </TableCell>
					<TableCell>{organization ? organization.name : ''}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Head Count: </TableCell>
					<TableCell>{organization ? organization.headcount : ''}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Public: </TableCell>
					<TableCell>
						{organization && organization.is_public ? 'True' : 'False'}
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Address: </TableCell>
					<TableCell>{organization ? organization.address_1 : ''}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>City: </TableCell>
					<TableCell>{organization ? organization.city : ''}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Zip Code: </TableCell>
					<TableCell>{organization ? organization.zip_code : ''}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>State: </TableCell>
					<TableCell>{organization ? organization.state : ''}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default OrganizationModalTable;
