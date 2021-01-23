import { countBy, difference, flatten, map, mapValues } from 'lodash';
import { EVIDENCES } from '../data/evidences';
import { objectFill } from '../utils';

export const pageSelector = (state) => state.app.page;

export const sessionIdSelector = (state) => state.session.sessionId;

export const selectedEvidencesSelector = (state) => state.picker.selectedEvidences;

export const questButtonsStateSelector = (state) => state.picker.questButtons;

export const isActiveButtonSelector = (state, type, name) => {
  switch (type) {
    case 'evidence': {
      return state.picker.evidenceButtons[name];
    }

    case 'quest': {
      return state.picker.questButtons[name];
    }

    case 'talksToEveryOne': {
      return state.picker.talksToEveryOne;
    }

    default: {
      return false;
    }
  }
};

export const loaderStateSelector = (state) => state.loader;

export const pickerStateSelector = (state) => state.picker;

export const connectionStatusSelector = (state) => state.session.isActive;

export const isExistingSessionSelector = (state) => state.session.isExistingSession;

export const sessionErrorSelector = (state) => state.session.lastError;

export const activeClientsSelector = (state) => state.session.activeClients;

export const evidenceProbabilitiesSelector = (state) => {
  const evidences = flatten(map(state.picker.ghosts, ghost => ghost.evidences));
  const uncertainEvidences = difference(evidences, state.picker.selectedEvidences);

  const counts = { ...objectFill(EVIDENCES, 0), ...countBy(uncertainEvidences) };
  const total = uncertainEvidences.length || 1;

  let probabilities = mapValues(counts, count => count / total);
  probabilities = { ...probabilities, ...objectFill(state.picker.selectedEvidences, 1) };

  return probabilities;
};
