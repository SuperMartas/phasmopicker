import {
  WEBSOCKET_OPEN, WEBSOCKET_CLOSED, WEBSOCKET_MESSAGE,
  WEBSOCKET_DISCONNECT, CHECK_IF_SESSION_EXISTS, SET_SESSION_ERROR,
  SET_SESSION_ID, RESET_SESSION_COMPLETE, RESET_SESSION_ERROR, SET_PICKER_STATE,
} from '../actions';

const defaultState = {
  isActive: false,
  sessionId: null,
  isExistingSession: false,
  lastError: null,
  activeClients: 0,
};

const session = (state = defaultState, action) => {
  switch (action.type) {
    case WEBSOCKET_OPEN: {
      return { ...state, isActive: true };
    }

    case WEBSOCKET_DISCONNECT:
    case WEBSOCKET_CLOSED: {
      return {
        ...state,
        isExistingSession: false,
        isActive: false,
      };
    }

    case WEBSOCKET_MESSAGE: {
      const { payload: { message } } = action;

      const content = JSON.parse(message);

      if (content.type === SET_SESSION_ID) {
        const { data: { sessionId } } = content;

        return {
          ...state,
          sessionId,
          isExistingSession: true,
        };
      }

      if (content.type === CHECK_IF_SESSION_EXISTS) {
        const { data: { exists, error } } = content;

        return {
          ...state,
          isExistingSession: exists,
          lastError: error,
        };
      }

      if (content.type === SET_PICKER_STATE) {
        const { data: { activeClients } } = content;

        return {
          ...state,
          activeClients,
        };
      }

      return state;
    }

    case SET_SESSION_ID: {
      const { sessionId, isOffline } = action;

      return {
        ...state,
        sessionId,
        isExistingSession: !isOffline,
      };
    }

    case SET_SESSION_ERROR: {
      const { error } = action;

      return {
        ...state,
        lastError: error,
      };
    }

    case RESET_SESSION_ERROR: {
      return {
        ...state,
        lastError: null,
      };
    }

    case RESET_SESSION_COMPLETE: {
      return defaultState;
    }

    default: return state;
  }
};

export default session;
