import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { UserRegistrationFormKey } from '../registrationSchema'

const EmailField = () => {
	const { control } = useFormContext()
	return (
		<Controller
			name={UserRegistrationFormKey.EMAIL}
			control={control}
			render={({ field }) => (
				<TextField {...field} label="Email" variant="filled" />
			)}
		/>
	)
}

export default EmailField