import {all, put, takeEvery} from 'redux-saga/effects'
import {
  GET_ARMY_REQUEST,
  GetArmyRequestAction,
  getArmySuccessActionCreator,
  getArmyFailureActionCreator,
  POST_BUY_ARMY_REQUEST,
  PostBuyArmyRequestAction,
  postBuyArmySuccessActionCreator,
  postBuyArmyFailureActionCreator,
} from './army.actions'
import {AxiosResponse} from 'axios'
import {PurchasableUnitResponse} from '../../model/army/purchasableUnit.response'
import armyService from '../../utility/services/armyService'
import {PurchaseUnitResponse} from '../../model/army/purchaseUnit.response'
import {getAttackUnits} from '../attack/attack.actions'

export function* armySaga() {
  yield all([watchGet(), watchPost()])
}

function* watchGet() {
  yield takeEvery(GET_ARMY_REQUEST, getArmyActionWatcher)
}

function* watchPost() {
  yield takeEvery(POST_BUY_ARMY_REQUEST, postBuyArmyActionWatcher)
}

function* getArmyActionWatcher(action: GetArmyRequestAction) {
  try {
    const response: AxiosResponse<PurchasableUnitResponse> = yield armyService.getArmy()
    yield put(getArmySuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getArmyFailureActionCreator(errorMessage))
  }
}

function* postBuyArmyActionWatcher(action: PostBuyArmyRequestAction) {
  try {
    const response: AxiosResponse<PurchaseUnitResponse> = yield armyService.postBuyArmy(
      action.army,
    )
    yield put(postBuyArmySuccessActionCreator(response.data))
    yield put(getAttackUnits())
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a vásárlás közben'
    yield put(postBuyArmyFailureActionCreator(errorMessage))
  }
}
