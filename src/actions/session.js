export const SET_SESSION_ID = 'SET_SESSION_ID';
export const setSessionId = (sessionId, isSolo) => ({
  type: SET_SESSION_ID,
  sessionId,
  isSolo,
});

export const CHECK_IF_SESSION_EXISTS = 'CHECK_IF_SESSION_EXISTS';

export const RESET_SESSION = 'RESET_SESSION';
export const resetSession = () => ({ type: RESET_SESSION });

export const RESET_SESSION_COMPLETE = 'RESET_SESSION_COMPLETE';
export const resetSessionComplete = () => ({ type: RESET_SESSION_COMPLETE });

export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';
export const setSessionError = (error) => ({ type: SET_SESSION_ERROR, error });

export const RESET_SESSION_ERROR = 'RESET_SESSION_ERROR';
export const resetSessionError = () => ({ type: RESET_SESSION_ERROR });
