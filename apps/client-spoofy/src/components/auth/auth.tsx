import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useAppSelector } from 'redux/store';
import { useNavigate } from 'react-router';
import { PathName } from '@models/enums/pathName';

import IconHome from 'components/lottie/iconHome/iconHome';
import useStyles from './authStyles';
import Registration from './registration/registration';
import Login from './login/login';

const Auth: React.FC = () => {
	const { classes } = useStyles();
	const navigation = useNavigate();

	const [isLogin, setIsLogin] = useState(false);
	const accessToken = useAppSelector((state) => state.auth.accessToken);
	const expiresAt = useAppSelector((state) => state.auth.expiresAt);
	const currentUser = useAppSelector((state) => state.currentUser.user)
	const toggleAuth = () => setIsLogin((prev) => !prev);

	useEffect(() => {
		if (accessToken && expiresAt && currentUser) {
			navigation(PathName.library + PathName.songs);
		}
	}, [accessToken, expiresAt, currentUser])

	return (
		<div className={classes.fieldsContainer}>
			<div className={classes.titleContainer}>
				<div className={classes.iconHomeContainer}>
					<IconHome />
				</div>
				<div className={classes.titleNameContainer}>
					<Typography className={classes.title}>Musify</Typography>
				</div>
			</div>

			{isLogin ? <Login /> : <Registration />}

			<Button onClick={toggleAuth} >
				{isLogin ? ' Register' : ' Login'}
			</Button>
		</div>
	);
};

export default Auth;
