import { map, pick } from 'lodash';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setSessionIdCookie = (value) => {
  cookies.set('sessionId', value, { maxAge: 28800 });
};

export const getSessionIdFromCookies = () => cookies.get('sessionId');

export const resetSessionIdFromCookies = () => cookies.remove('sessionId');

export const getSessionIdFromUrl = () => {
  const matches = window.location.href.match(/\/+(\d{6})\/*$/);
  return matches ? matches[1] : null;
};

export const preparePickerStateForDatabase = (state) => (
  pick(state, ['evidenceButtons', 'questButtons', 'talksToEveryOne', 'ghostName'])
);

export const objectFill = (keys, value) => Object.fromEntries(map(keys, key => [key, value]));
