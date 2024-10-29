import { UserLoginFormKey } from './loginSchema';
import { FormProvider, } from 'react-hook-form';
import { Button } from '@mui/material';

import React from 'react';
import useStyles from '../authStyles';
import EmailField from '../feild/emailField';
import PasswordField from '../feild/passwordField';
import useLogin from './useLogin';

const LOGIN = 'Login'

const Login: React.FC = () => {
	const { classes } = useStyles();
	const { handleSubmit, onSubmit, methods } = useLogin()

	return (
		<div >
			<form className={classes.containerField} onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<PasswordField fieldName={UserLoginFormKey.PASSWORD} />
					<EmailField fieldName={UserLoginFormKey.EMAIL} />
					<Button type="submit" className={classes.btn} variant="contained">
						{LOGIN}
					</Button>
				</FormProvider>
			</form>
			<div>
				שכחת  סיסמה
			</div>
		</div>
	);
};

export default Login;
