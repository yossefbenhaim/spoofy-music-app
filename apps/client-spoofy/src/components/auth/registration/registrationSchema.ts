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
    .min(2, { message: 'חייב מינימום 2 תווים' })
    .max(25, { message: 'שם משתמש עד 25 תווים' }),
  [UserRegistrationFormKey.PASSWORD]: z
    .string()
    .min(8, { message: 'חייב להיות מינימום 8 תווים ' })
    .regex(/[0-9]/, { message: 'חייב מספר בסיסמה ' })
    .regex(/[@$!%*?&#]/, {
      message: 'חייב אות מיוחדת (@$!%*?&#)',
    }),
  [UserRegistrationFormKey.EMAIL]: z
    .string()
    .email({ message: 'איימל לא תקין  ' }),
  [UserRegistrationFormKey.ADDRESS]: z
    .string()
    .min(4, { message: 'חייב מינימום 4  תווים' })
    .max(50, { message: 'יותר מדי תווים' }),
});

export type UserRegistrationType = z.infer<typeof UserRegistration>;
export default UserRegistration;
