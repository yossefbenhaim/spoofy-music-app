import { GenericPlaylistDialogForm } from './schamaGenericPlaylistDialog';
import { VariantType, useSnackbar } from 'notistack';
import { SnakbarMessage } from './snakbarMessage';
import { useAppSelector } from 'redux/store';
import { SubmitHandler } from 'react-hook-form';
import { difference } from 'lodash';
import { Playlist } from 'models/interface/playlist';
import { trpc } from 'trpc/trpcProvider';

interface Props {
  currentPlaylist: Playlist | undefined;
  handleClose: () => void;
}

const useGenericDialogPlaylist = (props: Props) => {
  const { currentPlaylist, handleClose } = props;
  const { enqueueSnackbar } = useSnackbar();

  const mutationAddPlaylist1 =
    trpc.spoofyMutationRouter.addPlaylist.useMutation();
  const mutationAddPlaylistSong1 =
    trpc.spoofyMutationRouter.addPlaylistSong.useMutation();
  const mutationDeletePlaylistSong1 =
    trpc.spoofyMutationRouter.deletePlaylistSong.useMutation();
  const mutationUpdatePlaylistName1 =
    trpc.spoofyMutationRouter.updatePlaylistNameById.useMutation();

  const songs = useAppSelector((state) => state.songs.songs);
  const currentUser = useAppSelector((state) => state.currentUser.user?.id);
  const IS_EDIT = Boolean(currentPlaylist);

  const defaultDialogValues = {
    name: currentPlaylist?.name,
    songs: currentPlaylist?.songs,
  };

  const handleQueryMessage = (variant: VariantType) =>
    IS_EDIT
      ? enqueueSnackbar(SnakbarMessage.UpdatePlaylist, { variant })
      : enqueueSnackbar(SnakbarMessage.addNewPlaylist, { variant });

  const onSubmit: SubmitHandler<GenericPlaylistDialogForm> = async (data) => {
    try {
      const { name, songs } = data;
      if (!IS_EDIT) {
        mutationAddPlaylist1.mutate(
          {
            data: {
              playlist: {
                name: name,
                creatorId: currentUser,
              },
            },
          },
          {
            onSuccess: (data) => {
              songs.map(async (song) => {
                mutationAddPlaylistSong1.mutate({
                  data: {
                    playlistsong: {
                      playlistId: data?.id,
                      songId: song,
                    },
                  },
                });
              });
            },
          }
        );
      } else {
        const deleteSongs = difference(defaultDialogValues.songs, songs);
        const newSongs = difference(
          songs,
          defaultDialogValues.songs as string[]
        );

        if (deleteSongs.length > 0)
          deleteSongs.map(async (song) => {
            mutationDeletePlaylistSong1.mutate({
              data: {
                playlistId: currentPlaylist?.id,
                songId: song,
              },
            });
          });

        if (newSongs.length > 0)
          newSongs.map(async (song) => {
            mutationAddPlaylistSong1.mutate({
              data: {
                playlistsong: {
                  playlistId: currentPlaylist?.id,
                  songId: song,
                },
              },
            });
          });

        if (name !== currentPlaylist?.name)
          mutationUpdatePlaylistName1.mutate({
            data: {
              playlistPatch: {
                id: currentPlaylist?.id,
                name: name,
              },
            },
          });
      }

      handleQueryMessage('success');
      handleClose();
    } catch (err) {
      console.error('Failed to add or update playlist: ', err);
    }
  };

  return {
    defaultDialogValues,
    onSubmit,
    IS_EDIT,
    songs,
  };
};

export default useGenericDialogPlaylist;
