import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { UserRegistrationFormKey } from '../registrationSchema'

const UserNameField = () => {
	const { control } = useFormContext()
	return (
		<Controller
			name={UserRegistrationFormKey.USER_NAME}
			control={control}
			render={({ field }) => (
				<TextField {...field} label="User Name" variant="filled" />
			)}
		/>
	)
}

export default UserNameField