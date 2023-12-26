import React, { useState } from 'react';

import { resetUser } from 'redux/slice/currentUser';
import { IconButton } from '@mui/material/';
import { OptionUser } from '@models/enums/optionUser';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { resetFavorites } from 'redux/slice/favorites';
import { PathName } from 'models/enums/pathName';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useStyles from './userOptionMenuStyles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from 'components/userOptionMenu/profile/profile';

const UserOptionMenu: React.FC = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.currentUser);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [openProfileDialog, setOpenProfileDialog] = useState<boolean>(false)
	const open = Boolean(anchorEl);

	const FULL_USER_NAME =
		currentUser.user?.firstName +
		' ' +
		currentUser.user?.lastName

	const { classes } = useStyles();

	const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleOpenProfileDialog = () => {
		handleCloseMenu()
		setOpenProfileDialog(true)
	}

	const navigationPage = (path: string) => {
		handleCloseMenu()
		navigation(path);
	}

	const navigateToHome = () => {
		dispatch(resetUser());
		dispatch(resetFavorites())
		navigation(PathName.login);
	};

	return (
		<>
			<div className={classes.userIconContainer}>
				<Tooltip componentsProps={{ tooltip: { className: classes.tooltip } }} title={FULL_USER_NAME}>
					<IconButton onClick={handleOpenMenu} className={classes.userIcon}>
						<PermIdentityIcon />
					</IconButton>
				</Tooltip>
			</div>
			<Menu
				className={classes.menuContainer}
				anchorEl={anchorEl}
				open={open}
				onClose={handleCloseMenu}>
				<MenuItem
					className={classes.items}
					onClick={() => handleOpenProfileDialog()}
				>
					<div className={classes.containerIcons}>
						{OptionUser.profile}
						{<OpenInNewIcon className={classes.icons} />}
					</div>
				</MenuItem>
				<MenuItem
					className={classes.items}
					onClick={() => {
						navigationPage(PathName.settings)
					}}
				>
					<div className={classes.containerIcons}>
						{OptionUser.settings}
						{<SettingsIcon className={classes.icons} />}
					</div>
				</MenuItem>
				<MenuItem
					className={classes.disconnect}
					onClick={navigateToHome}
				>
					{OptionUser.disconnect}
				</MenuItem>
			</Menu>
			<Profile
				openProfileDialog={openProfileDialog}
				setOpenProfileDialog={setOpenProfileDialog}
			/>
		</>
	);
};

export default UserOptionMenu;