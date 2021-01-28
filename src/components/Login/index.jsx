import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { send } from '@giantmachines/redux-websocket/dist';

import Loader from '../Loader';

import {
  connectionStatusSelector, isExistingSessionSelector,
  sessionErrorSelector, sessionIdSelector,
} from '../../selectors';

import {
  enterApp, setSessionId,
  setSessionError, resetSessionError,
} from '../../actions';

import { getSessionIdFromCookies, setSessionIdCookie } from '../../utils';

import useStyles from './styles';

const Login = ({ join = false, sessionId, wsConnect }) => {
  const dispatch = useDispatch();
  const css = useStyles();

  const [sessionInputValue, setSessionInputValue] = useState(sessionId || '');
  const [isJoinButtonPressed, setIsJoinButtonPressed] = useState(join);
  const [isJoiningInProgress, setIsJoiningInProgress] = useState(join);

  const sessionIdCookie = getSessionIdFromCookies();
  const storedSessionId = useSelector((state) => sessionIdSelector(state));
  const connectionStatus = useSelector((state) => connectionStatusSelector(state));
  const isExistingSession = useSelector((state) => isExistingSessionSelector(state));
  const sessionError = useSelector((state) => sessionErrorSelector(state));

  useEffect(() => {
    if (join) {
      wsConnect();
    }
  }, [join, wsConnect]);

  useEffect(() => {
    if (sessionIdCookie && sessionIdCookie !== '') {
      dispatch(enterApp('picker'));
    }

    if (sessionIdCookie === '') {
      dispatch(enterApp('picker', true));
    }
  }, [dispatch, sessionIdCookie]);

  useEffect(() => {
    if (storedSessionId && isExistingSession) {
      setSessionIdCookie(storedSessionId);
      dispatch(enterApp('picker'));
    }
  }, [storedSessionId, isExistingSession, dispatch]);

  useEffect(() => {
    if (connectionStatus && !isJoiningInProgress) {
      dispatch(send({ action: 'CREATE_SESSION' }));
    }
  }, [dispatch, connectionStatus, isJoiningInProgress]);

  useEffect(() => {
    if (connectionStatus && isJoiningInProgress) {
      dispatch(send({ action: 'CHECK_IF_SESSION_EXISTS', data: { sessionId: sessionInputValue } }));
    }
  }, [dispatch, connectionStatus, isJoiningInProgress, sessionInputValue]);

  useEffect(() => {
    if (sessionError) {
      setIsJoiningInProgress(false);
    }
  }, [sessionError]);

  const validate = () => {
    if (sessionInputValue.length !== 6) {
      dispatch(setSessionError('Session id consists of 6 digits'));
      return false;
    }

    if (!(/^[0-9]+$/).test(sessionInputValue)) {
      dispatch(setSessionError('Wrong ID format'));
      return false;
    }

    return true;
  };

  const handleSessionIdChange = (value) => {
    dispatch(resetSessionError());
    setSessionInputValue(value);
  };

  const handleCreateClick = () => {
    wsConnect();
  };

  const handleClickJoin = (state) => {
    dispatch(resetSessionError());
    setIsJoinButtonPressed(state);
  };

  const handleJoinSession = () => {
    if (validate()) {
      setIsJoiningInProgress(true);
      wsConnect();
    }
  };

  const handleSoloLobby = () => {
    setSessionIdCookie('');
    dispatch(setSessionId(''));
    dispatch(enterApp('picker', true));
  };

  return (
    <Box className={css.wrapper}>
      <Box className={css.subWrapper}>
        {
          isJoinButtonPressed ? (
            <Box className={css.inputWrapper}>
              <TextField
                id="sessionID"
                label="Session ID"
                variant="outlined"
                value={sessionInputValue}
                error={!!sessionError}
                helperText={sessionError}
                onChange={(e) => handleSessionIdChange(e.target.value)}
              />
              <Button className={css.submitButton} onClick={handleJoinSession}>Join</Button>
              <Divider />
              <Button
                className={css.submitButton}
                onClick={() => handleClickJoin(false)}
              >
                Back
              </Button>
            </Box>
          ) : (
            <Box className={css.inputWrapper}>
              <Button
                className={css.submitButton}
                onClick={handleCreateClick}
              >
                Create online session
              </Button>
              <Divider />
              <Button
                className={css.submitButton}
                onClick={() => handleClickJoin(true)}
              >
                Join online session
              </Button>
              <Divider />
              <Button
                className={css.submitButton}
                onClick={handleSoloLobby}
              >
                Enter solo session
              </Button>
            </Box>
          )
        }
        <Loader type="linear" />
      </Box>
    </Box>
  );
};

Login.propTypes = {
  join: PropTypes.bool,
  sessionId: PropTypes.string,
  wsConnect: PropTypes.func.isRequired,
};

export default Login;
