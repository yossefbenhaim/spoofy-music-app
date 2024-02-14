import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  cardContainer: {
    color: theme.palette.common.text,
    backgroundColor: theme.palette.background.map.locationCard,
    backdropFilter: 'blur(5px)',
    width: '300px',
    height: '100px',
    direction: 'rtl',
    position: 'absolute',
    zIndex: '1',
    marginTop: '20%',
    marginLeft: '18%',
    '& .MuiCardContent-root': {
      padding: '8px',
    },
  },
  content: {
    fontSize: '12px',
  },
  headerCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30px',
  },
}));

export default useStyles;
