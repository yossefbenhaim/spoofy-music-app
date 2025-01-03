import { clearAccessToken, setAccessToken } from 'redux/slice/auth';
import { useNavigate, Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/store';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Typography } from '@mui/material';
import { PathName } from '@models/enums/pathName';
import { trpc } from 'trpc/trpcProvider';

import useStyles from './libraryStyles';
import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import MusicPlayer from 'components/musicPlayer/musicPlayer';
import IconMusify from 'components/lottie/iconMusify/iconMusify';
import Navbar from 'components/navbar/navbar';

const Library: React.FC = () => {
	const { classes } = useStyles();
	const navigation = useNavigate();

	const [cookies, _, __] = useCookies(['refreshToken']);
	const dispatch = useDispatch();

	const accessToken = useAppSelector((state) => state.auth.accessToken);
	const expiresAt = useAppSelector((state) => state.auth.expiresAt);
	const currentUser = useAppSelector((state) => state.currentUser.user)
	const response = trpc.spoofyAuthenticationRouter.refreshAccessToken.useMutation()
	const refreshAccessToken = async () => {
		try {
			response.mutateAsync({
				email: currentUser?.email ?? '',
				refreshToken: cookies.refreshToken
			}, {
				onSuccess(data) {
					if (data.accessToken) {
						dispatch(setAccessToken({ token: data.accessToken, expiresIn: 60 }));
					} else {
						dispatch(clearAccessToken());
						navigation(PathName.login);
					}
				}
			})
		} catch (error) {
			console.error('Failed to refresh token:', error);
			dispatch(clearAccessToken());
			navigation(PathName.login);
		}
	};

	useEffect(() => {
		if (!accessToken || !expiresAt) {
			navigation(PathName.login);
		};

		const currentTime = Date.now();
		const timeUntilExpiry = expiresAt! - currentTime;

		if (timeUntilExpiry <= 0) {
			dispatch(clearAccessToken());
			navigation(PathName.login);
			return;
		}


		const refreshTimeout = setTimeout(() => {
			refreshAccessToken();
		}, timeUntilExpiry - 6000);

		const expiryTimeout = setTimeout(() => {
			dispatch(clearAccessToken());
			navigation(PathName.login);
		}, timeUntilExpiry);

		return () => {
			clearTimeout(refreshTimeout);
			clearTimeout(expiryTimeout);
		};
	}, [accessToken, expiresAt]);




	return (
		<>
			<div className={classes.fieldsContainer}>
				<div className={classes.header}>
					<div className={classes.titleContainer}>
						<UserOptionMenu />
						<div className={classes.logoContainer}>
							<IconMusify />
							<Typography className={classes.textLogo}>musify </Typography>
						</div>
					</div>
				</div>
				<div className={classes.navigation}>
					<div className={classes.tableValuse}>
						<Outlet />
					</div>
					<div className={classes.buttonsContainer}>
						<Navbar />
					</div>
				</div>
				<div className={classes.musicPlayerContainer}>
					<MusicPlayer />
				</div>
			</div>
		</>
	);
};

export default Library;
