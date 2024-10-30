import UserRegistration, {
  UserRegistrationFormKey,
  UserRegistrationType,
  defaultValues,
} from './registrationSchema';
import { VariantType, useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { setAccessToken } from 'redux/slice/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCookies } from 'react-cookie';
import { PathName } from 'models/enums/pathName';
import { setUser } from 'redux/slice/currentUser';
import { trpc } from '../../../trpc/trpcProvider';
import { useAppSelector } from 'redux/store';

const useRegistration = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const currentCoordinatesAddress = useAppSelector(
    (state) => state.currentCoordinatesAddress.coordinates
  );

  const [_, setCookie] = useCookies(['refreshToken']);
  const registerMutation = trpc.spoofyAuthenticationRouter.register.useMutation(
    {
      onSuccess: (data: any) => {
        console.log('Registration successful:', data);
      },
      onError: (error: any) => {
        console.error('Registration failed:', error.message);
        handleQueryMessage(error.message, 'error');
      },
    }
  );

  const methods = useForm<UserRegistrationType>({
    defaultValues,
    resolver: zodResolver(UserRegistration),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log({ errors });

  const handleSetCookie = (refreshToken: string) => {
    setCookie('refreshToken', refreshToken, { path: '/', maxAge: 604800 });
  };

  const handleQueryMessage = (message: string, variant: VariantType) =>
    enqueueSnackbar(message, { variant });

  const onSubmit = async (data: UserRegistrationType) => {
    try {
      const response = await registerMutation.mutateAsync({
        userName: data[UserRegistrationFormKey.USER_NAME],
        email: data[UserRegistrationFormKey.EMAIL],
        password: data[UserRegistrationFormKey.PASSWORD],
        coordinates: currentCoordinatesAddress,
      });
      if (response?.user.id) {
        dispatch(setUser(response.user));
        dispatch(
          setAccessToken({ expiresIn: 60, token: response.accessToken })
        );
        handleSetCookie(response.refreshToken);
        navigation(PathName.library + PathName.songs);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return { handleSubmit, onSubmit, methods };
};

export default useRegistration;
