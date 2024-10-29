import z from 'zod';

export enum UserLoginFormKey {
  PASSWORD = 'password',
  EMAIL = 'email',
}
export const defaultValues: UserLoginType = {
  password: '',
  email: '',
};
const UserLogin = z.object({
  [UserLoginFormKey.PASSWORD]: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one digit' })
    .regex(/[@$!%*?&#]/, {
      message:
        'Password must contain at least one special character (@, $, !, %, *, ?, &, #)',
    }),

  [UserLoginFormKey.EMAIL]: z
    .string()
    .email({ message: 'Invalid email address format' }),
});

export type UserLoginType = z.infer<typeof UserLogin>;
export default UserLogin;
