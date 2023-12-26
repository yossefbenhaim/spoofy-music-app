import sequelize from './sequelizeSetup';
import Artists from './sequelizeTables/artist';
import Songs from './sequelizeTables/songs';

const syncSenqulizep = async () => {
  await Artists.sync();
  await Songs.sync();
};
export const syncSenqulize = async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('success');
      syncSenqulizep().catch(console.error);
    })
    .catch((e) => {
      console.log('unable to connect' + e);
    });
};
