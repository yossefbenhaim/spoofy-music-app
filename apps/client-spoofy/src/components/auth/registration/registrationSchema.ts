import z from 'zod';

export enum UserRegistrationFormKey {
  USER_NAME = 'userName',
  PASSWORD = 'password',
  EMAIL = 'email',
  COORDINATES = 'coordinates',
}
export const defaultValues: UserRegistrationType = {
  userName: '',
  password: '',
  email: '',
  coordinates: [0, 0],
};
const UserRegistration = z.object({
  [UserRegistrationFormKey.USER_NAME]: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters long' })
    .max(25, { message: 'Username must not exceed 25 characters' }),
  [UserRegistrationFormKey.PASSWORD]: z
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

  [UserRegistrationFormKey.EMAIL]: z
    .string()
    .email({ message: 'Invalid email address format' }),
  [UserRegistrationFormKey.COORDINATES]: z.tuple([
    z.number().min(-90).max(90),
    z.number().min(-180).max(180),
  ]),
});

export type UserRegistrationType = z.infer<typeof UserRegistration>;
export default UserRegistration;
