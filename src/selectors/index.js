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
