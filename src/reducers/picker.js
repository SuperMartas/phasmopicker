import {
  FILTER_GHOSTS, UPDATE_SELECTED_QUESTS,
  UPDATE_GHOST_NAME, RESET_PICKER, UPDATE_ANSWERS_EVERYONE_BUTTON,
  SET_PICKER_STATE, WEBSOCKET_MESSAGE,
} from '../actions';

import evidences from "../data/evidences";
import { UNKNOWN } from "../data/evidenceStates";
import quests from "../data/quests";

import { objectFill } from '../utils';

const defaultState = {
  evidenceButtons: objectFill(evidences, UNKNOWN),
  questButtons: objectFill(quests, false),
  talksToEveryOne: false,
  ghostName: '',
};

const picker = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_GHOSTS: {
      const { evidence, newState } = action;

      const updatedButtonsState = {
        ...state.evidenceButtons,
        [evidence]: newState,
      };

      return {
        ...state,
        evidenceButtons: updatedButtonsState,
      };
    }

    case UPDATE_GHOST_NAME: {
      const { name } = action;

      return {
        ...state,
        ghostName: name,
      };
    }

    case UPDATE_SELECTED_QUESTS: {
      const { quest, isActive } = action;

      return {
        ...state,
        questButtons: {
          ...state.questButtons,
          [quest]: isActive,
        },
      };
    }

    case UPDATE_ANSWERS_EVERYONE_BUTTON: {
      const { isActive } = action;

      return {
        ...state,
        talksToEveryOne: isActive,
      };
    }

    case WEBSOCKET_MESSAGE: {
      const { payload: { message } } = action;

      const content = JSON.parse(message);

      if (content.type === SET_PICKER_STATE) {
        const { data } = content;
        const { picker: pickerState } = data;

        return {
          ...state,
          ...pickerState,
        };
      }

      return state;
    }

    case RESET_PICKER: {
      return {
        ...defaultState,
      };
    }

    default:
      return state;
  }
};

export default picker;
