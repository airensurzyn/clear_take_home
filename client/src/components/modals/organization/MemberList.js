import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import colors from '../../../styles/colors';

const MemberList = ({ organization, members, memberErrors }) => {
	const filterMembersByOrganization = (organizationId, unfilteredList) => {
		return unfilteredList.filter(
			(member) =>
				member.organization_id === `organization_id ` + organization.id
		);
	};

	const mapMembers = () => {
		if (members) {
			let filteredList = filterMembersByOrganization(organization.id, members);
			return filteredList.map((member, index) => {
				return (
					<ListItem
						key={member.id}
						button
						disableRipple={true}
						style={index % 2 === 1 ? { backgroundColor: `${colors.gray}` } : {}}
					>
						<ListItemText>{member.name}</ListItemText>
					</ListItem>
				);
			});
		}
	};

	return <List>{members && organization ? mapMembers() : ''}</List>;
};

export default MemberList;
