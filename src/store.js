import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxWebsocket from '@giantmachines/redux-websocket';

import reducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxWebsocketMiddleware = reduxWebsocket();

  const store = createStore(
    reducer,
    process.env.REACT_APP_ENV === 'dev'
      ? composeWithDevTools(applyMiddleware(sagaMiddleware, reduxWebsocketMiddleware))
      : applyMiddleware(sagaMiddleware, reduxWebsocketMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
