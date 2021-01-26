import { get } from 'lodash';

import {
  FILTER_GHOSTS, UPDATE_SELECTED_QUESTS,
  UPDATE_GHOST_NAME, RESET_PICKER, UPDATE_ANSWERS_EVERYONE_BUTTON,
  SET_PICKER_STATE, WEBSOCKET_MESSAGE,
} from '../actions';

import evidences from "../data/evidences";
import { UNKNOWN } from "../data/evidenceStates";

import ghosts from '../data/ghosts';
import quests from "../data/quests";

import { filterGhostsByEvidences, objectFill } from '../utils';

const defaultState = {
  evidenceButtons: objectFill(evidences, UNKNOWN),
  questButtons: objectFill(quests, false),
  talksToEveryOne: false,
  ghostName: '',
};

const picker = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_GHOSTS: {
      const { evidence, nextState } = action;

      const updatedButtonsState = {
        ...state.evidenceButtons,
        [evidence]: nextState,
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
        const selectedEvidences = get(pickerState, 'selectedEvidences', state.selectedEvidences);

        return {
          ...state,
          ...pickerState,
          ghosts: filterGhostsByEvidences(ghosts, selectedEvidences),
        };
      }

      return state;
    }

    case RESET_PICKER: {
      return {
        ...defaultState,
        selectedEvidences: [],
      };
    }

    case SET_PICKER_STATE: {
      const { data } = action;
      const selectedEvidences = get(data, 'selectedEvidences', []);

      return {
        ...state,
        ...data,
        selectedEvidences,
        ghosts: filterGhostsByEvidences(ghosts, selectedEvidences),
      };
    }

    default:
      return state;
  }
};

export default picker;
