import { useEffect, useState } from 'react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'
import { useAppSelector } from 'redux/store'
import { findAddressByCoordinates } from 'utils/findAddressByCoordinates'
import useStyles from './fieldsStyles'

interface Props {
	fieldName: string
}

const AddressField = ({ fieldName }: Props) => {
	const { control, setValue, formState: { errors } } = useFormContext()
	const [location, setLocation] = useState<string | undefined>()
	const { classes } = useStyles()

	const currentCoordinatesAddress = useAppSelector(
		(state) => state.currentCoordinatesAddress.coordinates
	);

	useEffect(() => {
		if (currentCoordinatesAddress) {
			findAddressByCoordinates(currentCoordinatesAddress as number[]).then((address) => {
				setLocation(address)
				setValue(fieldName, address)
			})
		}
	}, [currentCoordinatesAddress, setValue])
	const getErrorMessage = (error: FieldError | undefined) =>
		error?.message ?? '';
	return (
		<Controller
			name={fieldName}
			control={control}
			render={({ field: { onChange, onBlur, value, name, ref } }) => (
				<TextField
					variant="outlined"
					className={classes.input}
					label='Address'
					error={!!errors[fieldName]}
					helperText={getErrorMessage(errors[fieldName] as FieldError)}
					value={location || value || ''}
					onChange={(e) => {
						onChange(e)
						setLocation(e.target.value)
					}}
					onBlur={onBlur}
					name={name}
					inputRef={ref}
				/>

			)}
		/>
	)
}

export default AddressField
