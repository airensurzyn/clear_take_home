import React, { useEffect, useState } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import OrganizationTable from '../components/tables/OrganizationTable';
import OrganizationModal from '../components/modals/organization/OrganizationModal';
import useRequest from '../hooks/use-request';
import { getOrganizations } from '../api/requests';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		backgroundColor: '#fff',
		paddingTop: '90px',

		justifyContent: 'center',
	},
	mainContent: {},
}));

const Home = (props) => {
	const classes = useStyles();
	const [recentlyFetched, setRecentlyFetched] = useState(false);
	const [organizations, setOrganizations] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [modal, setModal] = useState({
		isOpen: false,
		organizationId: '',
	});

	const { doRequest /*, errors*/ } = useRequest(getOrganizations());

	useEffect(() => {
		const getOrganizations = async () => {
			let response = await doRequest();
			setOrganizations(response);
			setIsLoading(false);
		};
		if (!recentlyFetched) {
			setIsLoading(true);
			getOrganizations();
			setRecentlyFetched(true);
		}
	}, [recentlyFetched, doRequest]);

	return (
		<Grid container className={classes.root}>
			<Grid item className={classes.mainContent}>
				<Grid container>
					<Grid item>
						<h2>Partner Organizations</h2>
						<Paper>
							<OrganizationTable
								organizations={organizations ? organizations : []}
								isLoading={isLoading}
								setModal={setModal}
								modal={modal}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
			<OrganizationModal modal={modal} setModal={setModal} />
		</Grid>
	);
};

export default Home;
