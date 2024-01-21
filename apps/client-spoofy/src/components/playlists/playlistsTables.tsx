import React from "react";
import { Playlist } from "models/interface/playlist";

import isEqual from "lodash/isEqual";
import PlaylistTable from "./genericPlaylistTable/playlistTable";
import IconEmptyPlaylist from "components/lottie/iconEmptyPlaylist/iconEmptyPlaylist";
import useStyles from '../playlists/genericPlaylistTable/playlistsTableStyles';
interface Props {
	handleClickOpen: (playlistId: Playlist | undefined) => void;
	playlists: Playlist[];
}

const PlaylistsTables: React.FC<Props> = (props) => {
	const { handleClickOpen, playlists } = props;
	const { classes } = useStyles();
	return (
		<>
			{playlists.length < 0 ? playlists.map((playlist) => (
				<PlaylistTable key={playlist.id} handleClickOpen={handleClickOpen} playlist={playlist} />
			)) : <div className={classes.IconEmptyPlaylistContainer} >

				<IconEmptyPlaylist />
			</div>}
		</>
	);
}

export default React.memo(PlaylistsTables, (prevProps, nextProps) =>
	isEqual(prevProps.playlists, nextProps.playlists)
);
