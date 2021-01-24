import React from 'react';
import PropTypes from 'prop-types';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Footer = ({ handleClick }) => {
  const css = useStyles();

  return (
    <div className={css.footer}>
      <Typography>
        App is created by <Link href="https://github.com/Dzybaty" target="_blank" rel="noopener" color="info.dark">dzybaty</Link> & modified by <Link href="https://supermartas.cz/" target="_blank" rel="noopener">SuperMartas</Link>
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Footer;
