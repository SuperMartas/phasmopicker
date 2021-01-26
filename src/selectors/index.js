import evidences from '../data/evidences';
import { FOUND, RULED_OUT, UNKNOWN } from "../data/evidenceStates";
import ghosts from "../data/ghosts";
import { countBy, difference, filter, flatten ,pickBy } from 'lodash';
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

export const selectedEvidenceSelector = (state) => Object.keys(pickBy(state.picker.evidenceButtons, (actualEvidenceState) => actualEvidenceState !== UNKNOWN));

export const evidenceByStateSelector = (state, evidenceState) => Object.keys(pickBy(state.picker.evidenceButtons, (actualEvidenceState) => actualEvidenceState === evidenceState));

export const foundEvidenceSelector = (state) => evidenceByStateSelector(state, FOUND);

export const ruledOutEvidenceSelector = (state) => evidenceByStateSelector(state, RULED_OUT);

export const filteredGhostsSelector = (state) => ghosts.filter((ghost) =>
  difference(foundEvidenceSelector(state), ghost.evidences).length === 0 &&
  difference(ghost.evidences, ruledOutEvidenceSelector(state)).length === ghost.evidences.length
);

export const ghostCountByEvidenceSelector = (state) => {
  const activeEvidences = flatten(filteredGhostsSelector(state).map(ghost => ghost.evidences));
  return { ...objectFill(evidences, 0), ...countBy(activeEvidences) };
};
