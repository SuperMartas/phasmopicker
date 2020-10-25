import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect, disconnect } from '@giantmachines/redux-websocket';

import Footer from './Footer';
import Modal from './Modal';

import { changePage, resetSession } from '../actions';

import { pageSelector, connectionStatusSelector } from '../selectors';

import { getSessionIdFromCookies } from '../utils';

import Picker from './Picker';
import Questions from './Questions';
import Login from './Login';

import theme from './theme';

const App = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => pageSelector(state));
  const connectionStatus = useSelector((state) => connectionStatusSelector(state));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const sessionIdCookie = getSessionIdFromCookies();

  useEffect(() => {
    if (!connectionStatus && sessionIdCookie && sessionIdCookie !== '') {
      dispatch(connect(process.env.REACT_APP_WS_HOST));
    }
  }, [dispatch, sessionIdCookie, connectionStatus]);

  useEffect(() => {
    if (connectionStatus) {
      window.addEventListener('beforeunload', () => {
        dispatch(disconnect());
      });
    }
  }, [dispatch, connectionStatus]);

  const handleChangePage = (newPage) => {
    dispatch(changePage(newPage));
  };

  const handleSessionReset = () => {
    if (connectionStatus) {
      dispatch(disconnect());
    }

    dispatch(resetSession());
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderPage = () => {
    switch (page) {
      case 'picker':
        return (
          <Picker
            changePage={handleChangePage}
            resetSession={handleSessionReset}
          />
        );
      case 'questions':
        return <Questions changePage={handleChangePage} />;
      default:
        return (
          <Login wsConnect={() => dispatch(connect(process.env.REACT_APP_WS_HOST))} />
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {renderPage()}
      <Footer handleClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </ThemeProvider>
  );
};

export default App;
