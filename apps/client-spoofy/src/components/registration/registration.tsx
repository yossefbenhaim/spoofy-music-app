import React, { useEffect, useState } from 'react';
import {
	Button,
	MenuItem,
	Typography,
	InputLabel,
	FormControl,
	Select,
	TextField,
} from '@mui/material';
import { VariantType, useSnackbar } from 'notistack';
import { useAppSelector } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/slice/currentUser';
import { PathName } from 'models/enums/pathName';
import { User } from 'models/interface/user';
import IconHome from 'components/lottie/iconHome/iconHome';
import useStyles from './registrationStyles';
import usersQuery from './usersQueary';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import UserRegistration, { UserRegistrationType } from './registrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '../../trpc/trpcProvider';
import UserNameField from './feild/userNameField';
import EmailField from './feild/emailField';
import PasswordField from './feild/passwordField';
import { FeedbackMessage } from '@models/enums/feedbackMessage';


const REGISTER = 'Register'

const Registration: React.FC = () => {
	usersQuery();
	const { classes } = useStyles();
	const { enqueueSnackbar } = useSnackbar();
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const methods = useForm<UserRegistrationType>({
		defaultValues: {
			userName: '',
			password: '',
			email: '',
			coordinates: [0, 0], // Adjusted coordinates default
		},
		resolver: zodResolver(UserRegistration),
	});

	const { handleSubmit } = methods;


	const currentUser = useAppSelector((state) => state.currentUser.user);



	useEffect(() => {
		console.log(currentUser?.id, '======');

		if (currentUser?.id != undefined) {
			navigation(PathName.library + PathName.songs);
		}
	}, [currentUser]);


	const handleQueryMessage = (variant: VariantType) =>
		enqueueSnackbar(FeedbackMessage.userAlreadyExists, { variant });

	const registerMutation = trpc.spoofyAuthenticationRouter.register.useMutation({
		onSuccess: (data: any) => {
			console.log('Registration successful:', data);
		},
		onError: (error: any) => {
			console.error('Registration failed:', error.message,);
			handleQueryMessage('error')
		},
	});




	const onSubmit = async (data: UserRegistrationType) => {

		try {
			const newUser = await registerMutation.mutateAsync(data);

			if (newUser?.user.id) {
				dispatch(setUser(newUser.user))
				navigation(PathName.library + PathName.songs);
			} else
				handleQueryMessage('error')
		} catch (error) {
			console.error('Error during registration:', error);
		}
	};

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

			<form className={classes.containerField} onSubmit={handleSubmit(onSubmit)}>
				<FormProvider {...methods}>
					<UserNameField />
					<PasswordField />
					<EmailField />
					<Button type="submit" className={classes.btn} variant="contained">
						{REGISTER}
					</Button>
				</FormProvider>
			</form>
			<div>

			</div>
		</div>
	);
};

export default Registration;
