import { ForgotPasswordKey } from './forgotPasswordSchema';
import { FormProvider, } from 'react-hook-form';
import { Button, Typography } from '@mui/material';

import React from 'react';
import useStyles from '../authStyles';
import EmailField from '../feild/emailField';
import useLogin from './useForgotPassword';

const SEND_CODE = 'שלח קוד'

const ForgotPassword: React.FC = () => {
	const { classes } = useStyles({});
	const { handleSubmit, onSubmit, methods } = useLogin()

	return (
		<  div className={classes.loginContainer}>
			<div className={classes.titleNameContainer}>
				<Typography className={classes.title}>התחבר</Typography>
			</div>
			<form className={classes.containerField} onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<EmailField fieldName={ForgotPasswordKey.EMAIL} />
					<div className={classes.containerSubmit}>
						<Button type="submit" className={classes.btn} variant="contained">
							{SEND_CODE}
						</Button>
					</div>
				</FormProvider>
			</form>

		</div>
	);
};

export default ForgotPassword;
