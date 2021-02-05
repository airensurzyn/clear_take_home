import React, { useState, useEffect } from 'react';
import {
	Grid,
	Dialog,
	DialogTitle,
	DialogContent,
	makeStyles,
	IconButton,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import useRequest from '../../../hooks/use-request';
import { getOrganizationById, getMembers } from '../../../api/requests';
import OrganizationModalTable from './OrganizationModalTable';
import MemberList from './MemberList';
import colors from '../../../styles/colors';

const useStyles = makeStyles((theme) => ({
	root: {},
	paper: {
		minWidth: '600px',
		minHeight: '300px',
	},
	organizationDetailsContainer: {
		maxHeight: '400px',
	},
	memberListContainer: {
		marginLeft: theme.spacing(2),
		overflow: 'hidden',
		overflowY: 'scroll',
		height: '300px',
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		'&:hover': {
			backgroundColor: `${colors.white}`,
		},
	},
}));

const OrganizationModal = (props) => {
	const { modal, setModal } = props;

	const classes = useStyles();
	const [organization, setOrganization] = useState({});
	const [members, setMembers] = useState([]);
	const [recentlyFetched, setRecentlyFetched] = useState(false);
	const [membersRecentlyFetched, setMembersRecentlyFetched] = useState(false);
	const { doRequest: getOrgByIdRequest /*, errors*/ } = useRequest(
		getOrganizationById(modal.organizationId)
	);
	const { doRequest: getMembersRequest /*, errors*/ } = useRequest(
		getMembers()
	);

	useEffect(() => {
		const getOrgById = async () => {
			let response = await getOrgByIdRequest();
			setOrganization(response);
		};

		const getMembersByOrgId = async () => {
			let response = await getMembersRequest();
			setMembers(response);
		};

		if (!recentlyFetched && modal.isOpen) {
			getOrgById();
			getMembersByOrgId();
			setRecentlyFetched(true);
		}
	}, [recentlyFetched, getOrgByIdRequest, getMembersRequest, modal]);

	const handleClose = () => {
		setModal({ ...modal, isOpen: false });
		setRecentlyFetched(false);
	};

	return (
		<Dialog
			open={modal.isOpen}
			onClose={handleClose}
			aria-labelledby="max-width-dialog-title"
			classes={{
				paper: classes.paper,
			}}
		>
			<DialogTitle id="form-dialog-title">
				Organization Details
				<IconButton className={classes.closeButton} onClick={handleClose}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>
				<Grid container className={classes.organizationDetailsContainer}>
					<Grid item xs={12} sm={7}>
						<div
							style={{
								width: '100%',
								textAlign: 'left',
								fontWeight: 'bold',
							}}
						>
							Details
						</div>
						<OrganizationModalTable organization={organization} />
					</Grid>
					<Grid item xs={12} sm={5}>
						<div
							style={{
								width: '100%',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Members
						</div>
						<div className={classes.memberListContainer}>
							<MemberList
								organization={organization}
								recentlyFetched={membersRecentlyFetched}
								setRecentlyFetched={setMembersRecentlyFetched}
								members={members}
							/>
						</div>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
};

export default OrganizationModal;
