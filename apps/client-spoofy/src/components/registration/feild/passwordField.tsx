import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { UserRegistrationFormKey } from '../registrationSchema'

const PasswordField = () => {
	const { control } = useFormContext()
	return (
		<Controller
			name={UserRegistrationFormKey.PASSWORD}
			control={control}
			render={({ field }) => (
				<TextField {...field} label="Password" variant="filled" />
			)}
		/>
	)
}

export default PasswordField