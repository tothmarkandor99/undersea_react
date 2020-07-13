import {all, takeEvery, put} from 'redux-saga/effects'
import {
  GET_UPGRADES_REQUEST,
  GetUpgradesRequestAction,
  getUpgradesSuccessActionCreator,
  getUpgradesFailureActionCreator,
} from './upgrade.actions'
import {AxiosResponse} from 'axios'
import {UpgradeResponse} from '../../model/upgrade/upgrade.response'
import upgradeService from '../../utility/services/upgradeService'

export function* upgradeSaga() {
  yield all([watchPost()])
}

function* watchPost() {
  yield takeEvery(GET_UPGRADES_REQUEST, getUpgradesActionWatcher) // TODO: azonnal: takeEvery
}

function* getUpgradesActionWatcher(action: GetUpgradesRequestAction) {
  try {
    const response: AxiosResponse<UpgradeResponse> = yield upgradeService.getUpgrades()
    yield put(getUpgradesSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getUpgradesFailureActionCreator(errorMessage))
  }
}
