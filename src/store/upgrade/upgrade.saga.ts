import {all, takeEvery, put} from 'redux-saga/effects'
import {
  GET_UPGRADES_REQUEST,
  GetUpgradesRequestAction,
  getUpgradesSuccessActionCreator,
  getUpgradesFailureActionCreator,
  POST_BUY_UPGRADE_REQUEST,
  PostBuyUpgradeRequestAction,
  postBuyUpgradeFailureActionCreator,
  postBuyUpgradeSuccessActionCreator,
  getUpgrades,
} from './upgrade.actions'
import {AxiosResponse} from 'axios'
import {UpgradeResponse} from '../../model/upgrade/upgrade.response'
import upgradeService from '../../utility/services/upgradeService'
import {BuyUpgradeResponse} from '../../model/upgrade/buyUpgrade.response'

export function* upgradeSaga() {
  yield all([watchGet(), watchPost()])
}

function* watchGet() {
  yield takeEvery(GET_UPGRADES_REQUEST, getUpgradesActionWatcher)
}

function* watchPost() {
  yield takeEvery(POST_BUY_UPGRADE_REQUEST, postBuyUpgradeActionWatcher)
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

function* postBuyUpgradeActionWatcher(action: PostBuyUpgradeRequestAction) {
  try {
    const response: AxiosResponse<BuyUpgradeResponse> = yield upgradeService.postBuyUpgrade(
      action.upgrade,
    )
    yield put(postBuyUpgradeSuccessActionCreator(response.data))
    yield put(getUpgrades())
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a vásárlás közben'
    yield put(postBuyUpgradeFailureActionCreator(errorMessage))
  }
}
