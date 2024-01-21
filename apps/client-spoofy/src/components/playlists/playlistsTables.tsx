import React from "react";
import { Playlist } from "models/interface/playlist";

import isEqual from "lodash/isEqual";
import PlaylistTable from "./genericPlaylistTable/playlistTable";
import IconEmptyRows from "components/lottie/emptyRowsScrean/icomEmptyRows";

interface Props {
	handleClickOpen: (playlistId: Playlist | undefined) => void;
	playlists: Playlist[];
}

const PlaylistsTables: React.FC<Props> = (props) => {
	const { handleClickOpen, playlists } = props;
	console.log(playlists);

	return (
		<>
			{playlists.length < 0 ? playlists.map((playlist) => (
				<PlaylistTable key={playlist.id} handleClickOpen={handleClickOpen} playlist={playlist} />
			)) : <div >
				<IconEmptyRows />
			</div>}
		</>
	);
}

export default React.memo(PlaylistsTables, (prevProps, nextProps) =>
	isEqual(prevProps.playlists, nextProps.playlists)
);
