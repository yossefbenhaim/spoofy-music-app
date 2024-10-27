import z from 'zod';

export enum UserRegistrationFormKey {
  USER_NAME = 'userName',
  PASSWORD = 'password',
  EMAIL = 'email',
  COORDINATES = 'coordinates',
}

const UserRegistration = z.object({
  [UserRegistrationFormKey.USER_NAME]: z.string().max(25).min(2),
  [UserRegistrationFormKey.PASSWORD]: z.string(),
  [UserRegistrationFormKey.EMAIL]: z.string(),
  [UserRegistrationFormKey.COORDINATES]: z.tuple([
    z.number().min(-90).max(90),
    z.number().min(-180).max(180),
  ]),
});

export type UserRegistrationType = z.infer<typeof UserRegistration>;
export default UserRegistration;
