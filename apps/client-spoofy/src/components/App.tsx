import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LicenseInfo } from '@mui/x-license-pro';
import { PathName } from 'models/enums/pathName';

import Library from './library/library';

import SongsTable from './songsTable/songsTable';
import FavoritesTable from './favoritesTable/favoritesTable';
import Playlists from './playlists/playlists';
import MapUsers from './users/MapUsers';
import Settings from './setting/setting';
import useStyles from './AppStyles';
import UseSubscription from 'hooks/useSubscription';
import UseQuery from 'hooks/useQuery';
import Auth from './auth/auth';

LicenseInfo.setLicenseKey('6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVRlc3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU0lPTj0x');

const App: React.FC = () => {
	const { classes } = useStyles()

	return (
		<div className={classes.root}>
			<UseSubscription />
			<UseQuery />
			<BrowserRouter>
				<Routes>
					<Route index element={<Auth />} />
					<Route path={PathName.library} element={<Library />}>
						<Route path={PathName.songs} element={<SongsTable />} />
						<Route path={PathName.playlist} element={<Playlists />} />
						<Route path={PathName.favorites} element={<FavoritesTable />} />
						<Route path={PathName.users} element={<MapUsers />} />
						<Route path={PathName.settings} element={<Settings />} />
					</Route>
					<Route path={PathName.forgotPassword} element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
