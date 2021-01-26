import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import useStyles from './styles';

const CustomButton = ({
  isActive = false, text, className, handleClick, ...props
}) => {
  const css = useStyles(props);
  const classes = [css.button];

  if (className)
    classes.push(className);

  if (isActive)
    classes.push(css.selected);

  return (
    <Button
      className={classes.join(' ')}
      onClick={() => handleClick(text, !isActive)}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomButton;
