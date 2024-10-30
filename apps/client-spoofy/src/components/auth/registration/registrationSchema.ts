import z from 'zod';

export enum UserRegistrationFormKey {
  USER_NAME = 'userName',
  PASSWORD = 'password',
  EMAIL = 'email',
  ADDRESS = 'address',
}
export const defaultValues: UserRegistrationType = {
  userName: '',
  password: '',
  email: '',
  address: '',
};
const UserRegistration = z.object({
  [UserRegistrationFormKey.USER_NAME]: z
    .string()
    .min(2, { message: 'Username must be at ' })
    .max(25, { message: 'User' }),
  [UserRegistrationFormKey.PASSWORD]: z
    .string()
    .min(8, { message: 'Password ' })
    .regex(/[A-Z]/, {
      message: 'Password must ',
    })
    .regex(/[a-z]/, {
      message: 'Password must ',
    })
    .regex(/[0-9]/, { message: 'Password ' })
    .regex(/[@$!%*?&#]/, {
      message: 'Password',
    }),

  [UserRegistrationFormKey.EMAIL]: z
    .string()
    .email({ message: 'Invalid email ' }),
  [UserRegistrationFormKey.ADDRESS]: z
    .string()
    .min(4, { message: 'Address must be at ' })
    .max(100, { message: 'Address' }),
});

export type UserRegistrationType = z.infer<typeof UserRegistration>;
export default UserRegistration;
