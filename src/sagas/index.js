import {
  put, takeEvery, select, takeLatest, delay,
} from 'redux-saga/effects';

import { disconnect, send } from '@giantmachines/redux-websocket';

import {
  ENTER_APP, RESET_SESSION, UPDATE_ANSWERS_EVERYONE_BUTTON, WEBSOCKET_MESSAGE,
  UPDATE_SELECTED_QUESTS, UPDATE_GHOST_NAME, FILTER_GHOSTS, RESET_PICKER,
  resetPicker, resetSessionComplete, setSessionId, CHECK_IF_SESSION_EXISTS,
} from '../actions';

import { sessionIdSelector, pickerStateSelector, connectionStatusSelector } from '../selectors';

import {
  resetSessionIdFromCookies, getSessionIdFromCookies, preparePickerStateForDatabase,
} from '../utils';

function* enterApp() {
  const sessionIdCookie = getSessionIdFromCookies();
  yield put(setSessionId(sessionIdCookie, true));
}

function* removeSession() {
  resetSessionIdFromCookies();
  yield put(resetSessionComplete());
  yield put(resetPicker());
}

function* handlePickerChange() {
  const sessionId = yield select(sessionIdSelector);
  const picker = yield select(pickerStateSelector);
  const connectionStatus = yield select(connectionStatusSelector);

  if (connectionStatus) {
    yield put(send({
      action: 'UPDATE_SESSION',
      data: { sessionId, state: preparePickerStateForDatabase(picker) },
    }));
  }
}

function* handleSocketMessage(action) {
  const { payload: { message } } = action;

  const content = JSON.parse(message);

  if (content.type === CHECK_IF_SESSION_EXISTS) {
    const { data: { exists } } = content;

    if (!exists) {
      yield put(disconnect());
    } else {
      const { data: { sessionId } } = content;
      yield put(setSessionId(sessionId, false));
    }
  }
}

function* rootSaga() {
  yield takeEvery(ENTER_APP, enterApp);
  yield takeEvery(RESET_SESSION, removeSession);
  yield takeEvery(WEBSOCKET_MESSAGE, handleSocketMessage);
  yield takeLatest([
    UPDATE_GHOST_NAME,
    UPDATE_SELECTED_QUESTS,
    UPDATE_ANSWERS_EVERYONE_BUTTON,
    FILTER_GHOSTS,
    RESET_PICKER,
  ], handlePickerChange);
}

export default rootSaga;
