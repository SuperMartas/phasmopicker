import { filter, difference, map, pick } from 'lodash';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const filterGhostsByEvidences = (ghosts, evidences) => (
  filter(ghosts, (ghost) => difference(evidences, ghost.evidences).length === 0)
);

export const setSessionIdCookie = (value) => {
  cookies.set('sessionId', value, { maxAge: 28800 });
};

export const getSessionIdFromCookies = () => cookies.get('sessionId');

export const resetSessionIdFromCookies = () => cookies.remove('sessionId');

export const preparePickerStateForDatabase = (state) => (
  pick(state, ['selectedEvidences', 'evidenceButtons', 'questButtons', 'talksToEveryOne', 'ghostName'])
);

export const objectFill = (keys, value) => Object.fromEntries(map(keys, key => [key, value]));
