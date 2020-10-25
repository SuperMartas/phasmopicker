import {
  SHOW_LOADER, HIDE_LOADER, WEBSOCKET_CONNECT, WEBSOCKET_OPEN,
} from '../actions';

const loader = (state = false, action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
    case SHOW_LOADER: {
      return true;
    }

    case WEBSOCKET_OPEN:
    case HIDE_LOADER: {
      return false;
    }

    default:
      return state;
  }
};

export default loader;
