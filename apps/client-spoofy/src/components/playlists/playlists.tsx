import React, { useState } from 'react';

import { useAppSelector } from 'redux/store';
import { Typography, Button } from '@mui/material';
import { Playlist } from 'models/interface/playlist';

import useStylesCommon from 'common/commonStyles';
import useStyles from './genericPlaylistTable/playlistsTableStyles';
import GenericPlaylistDialog from 'common/genericPlaylistDialog/genericPlaylistDialog';
import PlaylistsTables from './playlistsTables';


const CREATE_NEW_PLAYLIST = '+ צור פלייליסט חדש'

const Playlists: React.FC = () => {
	const { classes } = useStyles();
	const { classes: classesCommon } = useStylesCommon();

	const [openDialogAddPlaylist, setOpenDialogAddPlaylist] = useState<boolean>(false);
	const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | undefined>();
	const playlists = useAppSelector((state) => state.playlists.playlists);

	const handleClickOpen = (newCurrentPlaylist: Playlist | undefined) => {
		if (newCurrentPlaylist !== undefined) {
			setCurrentPlaylist(newCurrentPlaylist)
		} else {
			setCurrentPlaylist(undefined)
		}
		setOpenDialogAddPlaylist(true);
	}


	const handleClose = () => setOpenDialogAddPlaylist(false);

	return (
		<>
			<div className={classesCommon.headerContainer}>
				<Typography className={classesCommon.header}>פלייליסטים</Typography>
			</div>
			<div className={classes.fieldsContainer}>
				<PlaylistsTables playlists={playlists} handleClickOpen={handleClickOpen} />
			</div>
			<div className={classes.addSongBtnContainer}>
				<Button
					variant="contained"
					className={classesCommon.genericButton}
					onClick={() => { handleClickOpen(undefined) }}
				>
					{CREATE_NEW_PLAYLIST}
				</Button>
			</div>
			<GenericPlaylistDialog
				openDialogAddPlaylist={openDialogAddPlaylist}
				handleClose={handleClose}
				currentPlaylist={currentPlaylist}
			/>
		</>
	)
}

export default Playlists;
