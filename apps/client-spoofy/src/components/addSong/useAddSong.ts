import { VariantType, useSnackbar } from 'notistack';
import { AddSongFormFieldsNames } from 'models/enums/formFieldsName';
import { FeedbackMessage } from 'models/enums/feedbackMessage';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddSongForm } from './AddSongSchema';
import { useState } from 'react';
import { addSong } from 'redux/slice/songs';
import { setArtists } from 'redux/slice/artist';
import { trpc } from 'trpc/trpcProvider';
import { useAppSelector } from 'redux/store';

const useAddSong = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [openDialogAddSong, setOpenDialogAddSong] = useState<boolean>(false);
  const artists = useAppSelector((state) => state.artist.artist);
  const mutationAddSong = trpc.spoofyMutationRouter.addSong.useMutation();

  const defaultDialogValues = {
    [AddSongFormFieldsNames.name]: '',
    [AddSongFormFieldsNames.artist]: '',
    [AddSongFormFieldsNames.duration]: 0,
  };

  const handleQueryMessage = (variant: VariantType) =>
    enqueueSnackbar(FeedbackMessage.createdSong, { variant });

  const handleClickOpen = () => setOpenDialogAddSong(true);

  const handleClose = () => setOpenDialogAddSong(false);

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
                artistByArtistId: data.artistByArtistId.name,
              })
            );
            handleQueryMessage('success');
          },
        }
      );
    handleClose();
  };

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
