import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useAppSelector } from 'redux/store';
import { useNavigate } from 'react-router';
import { PathName } from '@models/enums/pathName';

import IconHome from 'components/lottie/iconHome/iconHome';
import useStyles from './authStyles';
import Registration from './registration/registration';
import Login from './login/login';
import { Map } from 'components/map';

const Auth: React.FC = () => {
	const [isLogin, setIsLogin] = useState(false);
	const { classes } = useStyles({ isLogin }); // Pass isLogin to useStyles
	const navigation = useNavigate();

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
			<div className={classes.roundTemplate}>
				<div className={classes.selectLocation}>
					{isLogin ?
						"" :
						<Map
							width={"100%"}
							height={"85%"}
						/>
					}
				</div>
				<div className={classes.registryStyleForm}>
					<div className={classes.titleContainer}>
						<div className={classes.iconHomeContainer}>
							<div className={classes.divForCenterIcon}></div>
							<IconHome />
							<div className={classes.toggleButton}>
								<Button className={classes.btnToggle} onClick={toggleAuth} >
									{isLogin ? ' צור חשבון' : ' התחבר'}
								</Button>
							</div>
						</div>
					</div>

					{isLogin ? <Login /> : <Registration />}

				</div>
			</div>
		</div>
	);
};

export default Auth;
