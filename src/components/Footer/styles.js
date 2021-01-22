import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    background: palette.primary.main,
    color: palette.primary.contrastText,
  },
}));
