import { ForgotPasswordType, defaultValues } from './forgotPasswordSchema';
import { VariantType, useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { PathName } from 'models/enums/pathName';
import { trpc } from '../../../trpc/trpcProvider';
import ForgotPassword from './forgotPasswordSchema';

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigation = useNavigate();

  const methods = useForm<ForgotPasswordType>({
    defaultValues,
    resolver: zodResolver(ForgotPassword),
  });
  const { handleSubmit } = methods;

  const handleQueryMessage = (message: string, variant: VariantType) =>
    enqueueSnackbar(message, { variant });

  const verificationEmail =
    trpc.spoofyAuthenticationRouter.forgetPassword.useMutation({
      onSuccess: (data: any) => {
        console.log(' verification successful:', data);
      },
      onError: (error: any) => {
        console.error(' verification failed:', error.message);
        handleQueryMessage(error.message, 'error');
      },
    });



  const onSubmit = async (data: ForgotPasswordType) => {
    try {
      const response = await verificationEmail.mutateAsync(data);
      if (response?.user.id) {
        navigation(PathName.login);
      }
    } catch (error) {
      console.error('Error during  verification:', error);
    }
  };

  return { handleSubmit, onSubmit, methods };
};

export default useLogin;
