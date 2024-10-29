import UserLogin, { UserLoginType, defaultValues } from './loginSchema';
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

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [_, setCookie] = useCookies(['refreshToken']);

  const methods = useForm<UserLoginType>({
    defaultValues,
    resolver: zodResolver(UserLogin),
  });
  const { handleSubmit } = methods;

  const handleQueryMessage = (message: string, variant: VariantType) =>
    enqueueSnackbar(message, { variant });

  const loginMutation = trpc.spoofyAuthenticationRouter.login.useMutation({
    onSuccess: (data: any) => {
      console.log('Login successful:', data);
    },
    onError: (error: any) => {
      console.error('Login failed:', error.message);
      handleQueryMessage(error.message, 'error');
    },
  });

  const handleSetCookie = (refreshToken: string) => {
    setCookie('refreshToken', refreshToken, { path: '/', maxAge: 604800 });
  };

  const onSubmit = async (data: UserLoginType) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      if (response?.user.id) {
        navigation(PathName.library + PathName.songs);
        dispatch(setUser(response.user));
        dispatch(
          setAccessToken({ token: response.accessToken, expiresIn: 60 })
        );
        handleSetCookie(response.refreshToken);
      }
    } catch (error) {
      console.log('test');

      console.error('Error during registration:', error);
    }
  };

  return { handleSubmit, onSubmit, methods };
};

export default useLogin;
