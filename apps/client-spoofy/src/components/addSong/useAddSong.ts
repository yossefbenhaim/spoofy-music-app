import { VariantType, useSnackbar } from 'notistack';
import { AddSongFormFieldsNames } from 'models/enums/formFieldsName';
import { useQuery } from '@apollo/client';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddSongForm } from './AddSongSchema';
import { useState } from 'react';
import { addSong } from 'redux/slice/songs';
import { Artist } from 'models/interface/artist';

import GET_ARTIST from 'queries/query/artists';
import { trpc } from 'trpc/trpcProvider';

const useAddSong = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [openDialogAddSong, setOpenDialogAddSong] = useState<boolean>(false);
  const [artists, setArtists] = useState<Artist[]>([]);

  const defaultDialogValues = {
    [AddSongFormFieldsNames.name]: '',
    [AddSongFormFieldsNames.artist]: '',
    [AddSongFormFieldsNames.duration]: 0,
  };

  const handleQueryMessage = (variant: VariantType) =>
    enqueueSnackbar(FeedbackMessage.createdSong, { variant });

  const mutationAddSong = trpc.spoofyMutationRouter.addSong.useMutation();
  //   const mutationAddSong = trpc.spoofyQueryRouter.addSong.useMutation();

  //   const allArtists = trpc.spoofyQueryRouter.getArtists.useQuery();
  //   const data = allArtists.data?.nodes;
  //   useEffect(() => {
  //     if (allArtists.isSuccess) {
  //       const artists: Artist[] | undefined = data?.map((playlist) => ({
  //         id: playlist.id,
  //         name: playlist.name,
  //       }))!;
  //       setArtists(artists);
  //     }
  //   }, [data]);

  const onSubmit: SubmitHandler<AddSongForm> = (data) => {
    const { name, artist, duration } = data;
    const song: AddSongForm = data;

    if (song)
      mutationAddSong.mutate(
        {
          data: {
            song: {
              artistId: artist,
              duration: duration,
              name: name,
            },
          },
        },
        {
          onSuccess: (data: any) => {
            dispatch(
              addSong({
                id: data.id,
                name: data.name,
                duration: data.duration,
                artist: data.artistByArtistId.name,
              })
            );
            handleQueryMessage('success');
          },
        }
      );
    handleClose();
  };

  const handleClickOpen = () => setOpenDialogAddSong(true);

  const handleClose = () => setOpenDialogAddSong(false);

  useQuery(GET_ARTIST, {
    onCompleted: (data) => {
      setArtists(data.allArtists.nodes);
    },
  });

  return {
    handleClickOpen,
    handleClose,
    setArtists,
    onSubmit,
    artists,
    openDialogAddSong,
    defaultDialogValues,
  };
};

export default useAddSong;
