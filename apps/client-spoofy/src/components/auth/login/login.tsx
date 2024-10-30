import { UserLoginFormKey } from './loginSchema';
import { FormProvider, } from 'react-hook-form';
import { Button, Typography } from '@mui/material';

import React from 'react';
import useStyles from '../authStyles';
import EmailField from '../feild/emailField';
import PasswordField from '../feild/passwordField';
import useLogin from './useLogin';

const LOGIN = 'Login'

const Login: React.FC = () => {
	const { classes } = useStyles({});
	const { handleSubmit, onSubmit, methods } = useLogin()

	return (
		<  div className={classes.loginContainer}>
			<div className={classes.titleNameContainer}>
				<Typography className={classes.title}>התחבר</Typography>
			</div>
			<form className={classes.containerField} onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<PasswordField fieldName={UserLoginFormKey.PASSWORD} />
					<EmailField fieldName={UserLoginFormKey.EMAIL} />
					<div className={classes.containerSubmit}>
						<Button type="submit" className={classes.btn} variant="contained">
							{LOGIN}
						</Button>
					</div>
				</FormProvider>
			</form>

		</div>
	);
};

export default Login;
