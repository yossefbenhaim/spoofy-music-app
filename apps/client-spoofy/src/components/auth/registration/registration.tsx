import { UserRegistrationFormKey } from './registrationSchema';
import { FormProvider } from 'react-hook-form';
import { Button } from '@mui/material';

import React from 'react';
import useStyles from '../authStyles';
import UserNameField from '../feild/userNameField';
import PasswordField from '../feild/passwordField';
import EmailField from '../feild/emailField';
import useRegistration from './useRegistration';

const REGISTER = 'Register'

const Registration: React.FC = () => {
	const { classes } = useStyles();
	const { handleSubmit, onSubmit, methods } = useRegistration()

	return (
		<div>
			<form className={classes.containerField} onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<UserNameField fieldName={UserRegistrationFormKey.USER_NAME} />
					<PasswordField fieldName={UserRegistrationFormKey.PASSWORD} />
					<EmailField fieldName={UserRegistrationFormKey.EMAIL} />
					<Button type="submit" className={classes.btn} variant="contained">
						{REGISTER}
					</Button>
				</FormProvider>
			</form>
			<div>
				התחבר
			</div>
		</div>
	);
};

export default Registration;
