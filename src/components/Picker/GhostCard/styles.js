import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    padding: 20,
  },

  content: {
    display: 'flex',
  },

  accent: {
    color: '#CC3',
  },

  notFound: {
    color: 'grey',
  },

  header: {
    color: 'red',
  },

  strengthWrapper: {
    minHeight: '7rem',
    color: '#C66'
  },

  weaknessWrapper: {
    color: '#6C6'
  },

  section: {
    borderTop: "1px dashed rgba(255, 255, 255, 0.25)",
    marginTop: "0.5rem",
    paddingTop: "0.5rem",
  }
}));
