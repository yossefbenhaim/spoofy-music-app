import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  fieldsContainer: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: theme.palette.background.loginImage,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    overflow: 'hidden',
  },
  titleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  iconHomeContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  titleNameContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: '5rem',
    textShadow: '2px 2px 2px black',
    color: theme.palette.common.spoofy,
  },

  containerField: {
    display: 'flex',
    flexDirection: 'column',
  },

  btn: {
    transition: '0.6s',
    borderRadius: '10px',
    backgroundSize: '200%',
    backgroundImage: theme.palette.background.buttonColors.submit,
    '&:hover': {
      backgroundPosition: 'right',
    },
  },
}));

export default useStyles;
