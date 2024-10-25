import { Card, CardContent, IconButton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { User } from "@models/interface/user"

import useStyles from "./popupCardStyles"
import CancelIcon from '@mui/icons-material/Cancel';
import { findAddressByCoordinates } from "@utils/findAddressByCoordinates";

interface Props {
	userSelected: User | undefined,
	setSelctedUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

const PopupCard: React.FC<Props> = (props) => {
	const { userSelected, setSelctedUser } = props
	const { userName, coordinates } = userSelected as User
	const { classes } = useStyles()
	const [location, setLocation] = useState<string>()

	useEffect(() => {
		findAddressByCoordinates(coordinates as number[]).then((address) => {
			setLocation(address)
		})
	}, [coordinates])


	const handleExitCard = () => {
		setSelctedUser(undefined)
	}
	return (
		<Card className={classes.cardContainer}>
			<CardContent>
				<div className={classes.headerCard}>
					<Typography  >
						{`${userName}  😀`}
					</Typography>
					<IconButton onClick={handleExitCard}>
						<CancelIcon />
					</IconButton>
				</div>
				<Typography className={classes.content} >
					{`${location}`}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default PopupCard