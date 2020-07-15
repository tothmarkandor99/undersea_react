import {all, takeEvery, put} from 'redux-saga/effects'
import {
  GetStatsRequestAction,
  GET_STATS_REQUEST,
  getStatsFailureActionCreator,
  getStatsSuccessActionCreator,
} from './stats.actions'
import {AxiosResponse} from 'axios'
import {StatsResponse} from '../../model/stats/stats.response'
import statsService from '../../utility/services/statsService'

export function* statsSaga() {
  yield all([watchGet()])
}

function* watchGet() {
  yield takeEvery(GET_STATS_REQUEST, getStatsActionWatcher)
}

function* getStatsActionWatcher(action: GetStatsRequestAction) {
  try {
    const response: AxiosResponse<StatsResponse> = yield statsService.getStats()
    yield put(getStatsSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getStatsFailureActionCreator(errorMessage))
  }
}
