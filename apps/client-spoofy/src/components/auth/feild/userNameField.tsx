import { TextField } from '@mui/material'
import { Controller, FieldError, useFormContext } from 'react-hook-form'

interface Props {
	fieldName: string
}
const UserNameField = ({ fieldName }: Props) => {
	const { control, formState: { errors } } = useFormContext()
	const getErrorMessage = (error: FieldError | undefined) =>
		error?.message ?? '';
	return (
		<Controller
			name={fieldName}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					label="User Name"
					variant="filled"
					error={!!errors[fieldName]}
					helperText={getErrorMessage(errors[fieldName] as FieldError)}
					fullWidth
				/>
			)}
		/>
	)
}

export default UserNameField