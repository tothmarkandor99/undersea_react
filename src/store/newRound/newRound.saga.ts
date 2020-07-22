import {takeEvery, all, put} from 'redux-saga/effects'
import {
  NewRoundRequestAction,
  NEW_ROUND_REQUEST,
  newRoundSuccessActionCreator,
} from './newRound.actions'
import newRoundService from '../../utility/services/newRoundService'

export function* newRoundSaga() {
  yield all([watchPost()])
}

function* watchPost() {
  yield takeEvery(NEW_ROUND_REQUEST, newRoundActionWatcher)
}

function* newRoundActionWatcher(action: NewRoundRequestAction) {
  try {
    yield newRoundService.newRound(action.request)
    yield put(newRoundSuccessActionCreator())
  } catch (error) {
    console.log(error)
  }
}
