import {
  GetFightsRequestAction,
  getFightsFailureActionCreator,
  getFightsSuccessActionCreator,
  GET_FIGHTS_REQUEST,
} from './fight.actions'
import {put, takeEvery, all} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {FightResponse} from '../../model/fight/fight.response'
import fightsService from '../../utility/services/fightService'

export function* fightSaga() {
  yield all([watchGet()])
}

function* watchGet() {
  yield takeEvery(GET_FIGHTS_REQUEST, getFightsActionWatcher)
}

function* getFightsActionWatcher(action: GetFightsRequestAction) {
  try {
    const response: AxiosResponse<FightResponse> = yield fightsService.getFights()
    yield put(getFightsSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getFightsFailureActionCreator(errorMessage))
  }
}
