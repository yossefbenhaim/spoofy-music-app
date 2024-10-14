import sequelize from './sequelizeSetup';
import Artists from './sequelizeTables/artists';
import Favorites from './sequelizeTables/favorites';
import Playlist from './sequelizeTables/playlist';
import Playlist_Songs from './sequelizeTables/playlistSongs';
import Songs from './sequelizeTables/songs';
import Users from './sequelizeTables/users';

const syncSequelize = async () => {
  await Artists.sync();
  await Users.sync();
  await Playlist.sync();
  await Songs.sync();
  await Favorites.sync();
  await Playlist_Songs.sync();
};
export const Sequelize = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('success');
      syncSequelize().catch(console.error);
    })
    .catch((e) => {
      console.log('unable to connect' + e);
    });
};
