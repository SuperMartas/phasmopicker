import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  button: {
    border: '2px solid transparent',
    color: (props) => props.color,
    margin: '0 5px',
  },

  buttonSelected: {
    color: (props) => props.color,
    border: '2px solid #C00',
    margin: '0 5px',
  },
});
