const getOrganizations = () => {
	return {
		url: 'https://5fe220547a9487001768215e.mockapi.io/api/v1/organization',
		method: 'get',
	};
};

const getOrganizationById = (id) => {
	return {
		url:
			'https://5fe220547a9487001768215e.mockapi.io/api/v1/organization/' + id,
		method: 'get',
	};
};

const getMembers = () => {
	return {
		url: 'https://5fe220547a9487001768215e.mockapi.io/api/v1/members',
		method: 'get',
	};
};

const getGeocodes = () => {
	return {
		url: '/api/organizations/geocodes',
		method: 'get',
	};
};

export { getOrganizations, getOrganizationById, getMembers, getGeocodes };
