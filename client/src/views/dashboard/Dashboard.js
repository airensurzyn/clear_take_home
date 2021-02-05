import React, { useEffect, useState } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import OrganizationTable from '../../components/tables/organizations/OrganizationTable';
import OrganizationModal from '../../components/modals/organization/OrganizationModal';
import useRequest from '../../hooks/use-request';
import { getOrganizations } from '../../api/requests';
import colors from '../../styles/colors';
import DashboardTitle from './DashboardTitle';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
		backgroundColor: `${colors.white}`,
		paddingTop: '90px',
		justifyContent: 'center',
	},
}));

const Dashboard = (props) => {
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
				<DashboardTitle />
				<Grid container>
					<Grid item>
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

export default Dashboard;
