import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Footer = ({ handleClick }) => {
  const css = useStyles();

  return (
    <div className={css.footer}>
      <Typography>App is created by dzybaty & modified by SuperMartas</Typography>
    </div>
  );
};

Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
