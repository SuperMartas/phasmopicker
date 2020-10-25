import { CHANGE_PAGE, ENTER_APP, RESET_SESSION_COMPLETE } from '../actions';

const defaultState = {
  page: '',
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      const { page } = action;

      return ({
        ...state,
        page,
      });
    }

    case ENTER_APP: {
      const { page } = action;

      return ({
        ...state,
        page,
      });
    }

    case RESET_SESSION_COMPLETE: {
      return defaultState;
    }

    default:
      return state;
  }
};

export default app;
