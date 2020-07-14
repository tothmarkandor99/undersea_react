import {all, put} from 'redux-saga/effects'
import {
  GetArmyRequestAction,
  getArmySuccessActionCreator,
  getArmyFailureActionCreator,
} from './army.actions'
import {AxiosResponse} from 'axios'
import {PurchasableUnitResponse} from '../../model/army/purchasableUnit.response'
import armyService from '../../utility/services/armyService'

export function* armySaga() {
  yield all([watchGet()])
}

function* watchGet() {}

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
