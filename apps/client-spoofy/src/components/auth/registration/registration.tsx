import { UserRegistrationFormKey } from './registrationSchema';
import { FormProvider } from 'react-hook-form';
import { Button, Typography } from '@mui/material';

import React from 'react';
import useStyles from '../authStyles';
import UserNameField from '../feild/userNameField';
import PasswordField from '../feild/passwordField';
import EmailField from '../feild/emailField';
import useRegistration from './useRegistration';
import AddressField from '../feild/addressField';

const REGISTER = 'צור חשבון'

const Registration: React.FC = () => {
	const { classes } = useStyles({});
	const { handleSubmit, onSubmit, methods } = useRegistration()

	return (
		<>
			<div className={classes.titleNameContainer}>
				<Typography className={classes.title}>יצירת חשבון</Typography>
			</div>
			<form className={classes.containerField} onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<UserNameField fieldName={UserRegistrationFormKey.USER_NAME} />
					<PasswordField fieldName={UserRegistrationFormKey.PASSWORD} />
					<EmailField fieldName={UserRegistrationFormKey.EMAIL} />
					<AddressField fieldName={UserRegistrationFormKey.ADDRESS} />
					<div className={classes.containerSubmit}>
						<Button type="submit" className={classes.btn} variant="contained">
							{REGISTER}
						</Button>
					</div>
				</FormProvider>
			</form>

		</>
	);
};

export default Registration;
