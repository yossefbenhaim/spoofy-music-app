import { TextField } from '@mui/material'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import useStyles from './fieldsStyles'

interface Props {
	fieldName: string
}
const UserNameField = ({ fieldName }: Props) => {
	const { control, formState: { errors } } = useFormContext()
	const { classes } = useStyles()


	const getErrorMessage = (error: FieldError | undefined) =>
		error?.message ?? '';

	return (
		<Controller
			name={fieldName}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					className={classes.input}

					label="User Name"
					variant="outlined"
					error={!!errors[fieldName]}
					helperText={getErrorMessage(errors[fieldName] as FieldError)}
					fullWidth
				/>
			)}
		/>
	)
}

export default UserNameField