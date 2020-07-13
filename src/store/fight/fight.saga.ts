import {
  GetFightsRequestAction,
  getFightsFailureActionCreator,
  getFightsSuccessActionCreator,
} from './fight.actions'
import {put} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {FightResponse} from '../../model/fight/fight.response'
import fightsService from '../../utility/services/fightService'

export function* fightSaga() {}

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
