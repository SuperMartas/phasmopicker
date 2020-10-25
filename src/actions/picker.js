export const FILTER_GHOSTS = 'FILTER_GHOSTS';
export const filterGhosts = (evidence, isActive) => ({
  type: FILTER_GHOSTS,
  evidence,
  isActive,
});

export const UPDATE_SELECTED_QUESTS = 'UPDATE_SELECTED_QUESTS';
export const updateSelectedQuests = (quest, isActive) => ({
  type: UPDATE_SELECTED_QUESTS,
  quest,
  isActive,
});

export const UPDATE_GHOST_NAME = 'UPDATE_GHOST_NAME';
export const updateGhostName = (name) => ({
  type: UPDATE_GHOST_NAME,
  name,
});

export const UPDATE_ANSWERS_EVERYONE_BUTTON = 'UPDATE_ANSWERS_EVERYONE_BUTTON';
export const updateAnswersEveryoneButton = (isActive) => ({
  type: UPDATE_ANSWERS_EVERYONE_BUTTON,
  isActive,
});

export const RESET_PICKER = 'RESET_PICKER';
export const resetPicker = () => ({ type: RESET_PICKER });

export const SET_PICKER_STATE = 'SET_PICKER_STATE';
export const setPickerState = (data, key) => ({
  type: SET_PICKER_STATE,
  data,
  key,
});
