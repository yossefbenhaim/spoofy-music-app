import React, { Dispatch } from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Typography,
} from '@mui/material/';
import { VariantType, useSnackbar } from 'notistack';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { resetFavorites } from 'redux/slice/favorites';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCurrentUser } from 'redux/slice/currentUser';
import { User } from 'models/interface/user';
import { trpc } from 'trpc/trpcProvider';

import useStyles from './dialogDeleteUserStyles';
import useStylesCommon from 'common/commonStyles';
import { deleteUser } from 'redux/slice/users'
import { useAppSelector } from 'redux/store';
import { PathName } from '@models/enums/pathName';
interface Props {
	setOpenDialog: Dispatch<React.SetStateAction<boolean>>,
	openDialogDelete: boolean
}

const DialogDeleteUser: React.FC<Props> = (props) => {
	const { classes } = useStyles()
	const { classes: classesCommon } = useStylesCommon()
	const { setOpenDialog, openDialogDelete } = props
	const { enqueueSnackbar } = useSnackbar();

	const currentUser = useAppSelector((state) => state.currentUser.user);
	const deleteUserMutation = trpc.spoofyMutationRouter.deleteUserById.useMutation()

	const navigation = useNavigate();
	const dispatch = useDispatch();

	const handleCloseDeleteDialog = () =>
		setOpenDialog(false);

	const navigateToHome = () => {
		navigation(PathName.login);
	};

	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.deleteUser, { variant });

	const handleDeleteUser = (user: User) => {
		const userId = user.id
		deleteUserMutation.mutate({
			data: {
				id: userId
			}
		}, {
			onSuccess: (data) => {
				dispatch(deleteUser(data?.id as string))
				dispatch(resetCurrentUser());
				dispatch(resetFavorites())
				navigateToHome();
				handleQueryMessage('info')
			},
		})
	};

	return (
		<div>
			<>
				<Dialog
					open={openDialogDelete}
					keepMounted
					onClose={handleCloseDeleteDialog}
					className={classes.exitAccountContainer}
				>
					<DialogTitle className={classes.exitAccountTitle}>
						<Typography> ?האם אתה בטוח שאתה רוצה למחוק את החשבון</Typography>
					</DialogTitle>
					<DialogActions className={classes.exitAccountContent}>
						<Button
							onClick={handleCloseDeleteDialog}
							className={classesCommon.genericButton}
						>
							לא
						</Button>
						<Button
							className={classes.exitBtn}
							onClick={() => handleDeleteUser(currentUser as User)}
						>
							כן
						</Button>
					</DialogActions>
				</Dialog>
			</>
		</div>
	)
}

export default DialogDeleteUser