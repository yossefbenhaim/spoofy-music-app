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
    .min(8, { message: 'חייב להיות מינימום 8 תווים ' })
    .regex(/[0-9]/, { message: 'חייב מספר בסיסמה ' })
    .regex(/[@$!%*?&#]/, {
      message: 'חייב אות מיוחדת (@$!%*?&#)',
    }),
  [UserLoginFormKey.EMAIL]: z.string().email({ message: 'איימל לא תקין  ' }),
});

export type UserLoginType = z.infer<typeof UserLogin>;
export default UserLogin;
