import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import useStyles from './styles';

const StateButton = ({
  state, states = [false, true], colors = {}, text, handleClick, ...props
}) => {
  const css = useStyles(props);
  colors = {
    true: '#393',
    ...colors
  };

  const color = colors[state] || 'transparent';
  const nextState = states[(states.indexOf(state) + 1) % states.length];

  return (
    <Button
      className={css.button}
      style={{ borderColor: color }}
      onClick={() => handleClick(text, nextState)}
    >
      {text}
    </Button>
  );
};

StateButton.propTypes = {
  state: PropTypes.any.isRequired,
  states: PropTypes.array,
  colors: PropTypes.object,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default StateButton;
