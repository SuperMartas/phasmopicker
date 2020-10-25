import { combineReducers } from 'redux';

import app from './app';
import picker from './picker';
import loader from './loader';
import session from './session';

export default combineReducers({
  app,
  picker,
  loader,
  session,
});
