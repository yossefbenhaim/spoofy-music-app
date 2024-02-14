import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setThemeMode } from 'redux/slice/themeMode';
import { useAppSelector } from 'redux/store';
import React, { useState } from 'react';
import useStyles, { MaterialUISwitch } from './settingStyles';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useStylesCommon from 'common/commonStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import DialogDeleteUser from 'components/setting/dialogDeleteUser/dialogDeleteUser';
import Typography from '@mui/material/Typography';


const SETTING = 'הגדרות'
const DELETE_USER = 'מחק משתמש'
const EXPLAIN_CLICK_ON_DELETE = 'לחיצה על מחיקה תמחק את התמשתמש לצמיתות'
const DELETE = 'מחק'
const CHANGE_COLOR = 'שנה צבע'
const PICK_DISPLY_COLOR = 'בחר מצב תצוגת צבעים'


const Settings: React.FC = () => {
	const { classes } = useStyles()
	const { classes: classesCommon } = useStylesCommon();
	const dispatch = useDispatch();

	const [openDialogDelete, setOpenDialog] = useState<boolean>(false);
	const [checked, setChecked] = React.useState(true);

	const isDrakMode = useAppSelector((state) => state.themeMode.mode);

	const handleChange = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
		setChecked(checked);
		dispatch(setThemeMode({ mode: !isDrakMode }))
	};

	const handleClickOpenDeleteDialog = () =>
		setOpenDialog(true);

	return <div className={classes.containerFields}>
		<div className={classes.titleContainer}>
			<Typography className={classes.title}>{SETTING}</Typography>
		</div>
		<div className={classes.contentContainer}>
			<div>
				<Typography className={classes.titleContent}>{DELETE_USER}</Typography>
				<Typography className={classes.content}>{EXPLAIN_CLICK_ON_DELETE}</Typography>
			</div>
			<Button onClick={handleClickOpenDeleteDialog} className={classesCommon.genericButton}>
				<Typography >{DELETE}</Typography>
				<DeleteOutlineIcon />
			</Button>
		</div>
		<div className={classes.contentContainer}>
			<div>
				<Typography className={classes.titleContent}>{CHANGE_COLOR}</Typography>
				<Typography className={classes.content} >{PICK_DISPLY_COLOR}</Typography>
			</div>
			<FormControlLabel
				control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
				label=""
				checked={checked}
				onChange={handleChange}
			/>
		</div>
		<DialogDeleteUser
			openDialogDelete={openDialogDelete}
			setOpenDialog={setOpenDialog}
		/>
	</div>;
};

export default Settings;
