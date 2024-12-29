import z from 'zod';

export enum ForgotPasswordKey {
  EMAIL = 'email',
}
export const defaultValues: ForgotPasswordType = {
  email: '',
};

const ForgotPassword = z.object({
  [ForgotPasswordKey.EMAIL]: z.string().email({ message: 'איימל לא תקין  ' }),
});

export type ForgotPasswordType = z.infer<typeof ForgotPassword>;
export default ForgotPassword;
