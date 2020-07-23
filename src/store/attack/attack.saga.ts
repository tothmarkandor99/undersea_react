import {
  AttackActions,
  GET_ATTACK_TARGETS_REQUEST,
  GET_ATTACK_UNITS_REQUEST,
  POST_ATTACK_REQUEST,
  postAttackFailureActionCreator,
  getAttackUnitsFailureActionCreator,
  getAttackTargetsFailureActionCreator,
  GetAttackTargetsRequestAction,
  getAttackTargetsSuccessActionCreator,
  GetAttackUnitsRequestAction,
  PostAttackRequestAction,
  getAttackUnitsSuccessActionCreator,
  postAttackSuccessActionCreator,
} from './attack.actions'
import {debounce, all, takeEvery, put} from 'redux-saga/effects'
import {AttackTargetsResponse} from '../../model/attack/attackTargets.response'
import {AxiosResponse} from 'axios'
import attackService from '../../utility/services/attackService'
import {AttackUnitsResponse} from '../../model/attack/attackUnits.response'
import {AttackResponse} from '../../model/attack/attack.response'
import {useDispatch} from 'react-redux'
import {getFights} from '../fight/fight.actions'

export function* attackSaga() {
  yield all([watchGetTargets(), watchGetUnits(), watchPost()])
}

function* watchGetTargets() {
  yield debounce(
    1500,
    GET_ATTACK_TARGETS_REQUEST,
    getAttackTargetsActionWatcher,
  )
}

function* watchGetUnits() {
  yield takeEvery(GET_ATTACK_UNITS_REQUEST, getAttackUnitsActionWatcher)
}

function* watchPost() {
  yield takeEvery(POST_ATTACK_REQUEST, postAttackActionWatcher)
}

function* getAttackTargetsActionWatcher(action: GetAttackTargetsRequestAction) {
  try {
    const response: AxiosResponse<AttackTargetsResponse> = yield attackService.getAttackTargets(
      action.search,
    )
    yield put(getAttackTargetsSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getAttackTargetsFailureActionCreator(errorMessage))
  }
}

function* getAttackUnitsActionWatcher(action: GetAttackUnitsRequestAction) {
  try {
    const response: AxiosResponse<AttackUnitsResponse> = yield attackService.getAttackUnits()
    yield put(getAttackUnitsSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getAttackUnitsFailureActionCreator(errorMessage))
  }
}

function* postAttackActionWatcher(action: PostAttackRequestAction) {
  try {
    const response: AxiosResponse<AttackResponse> = yield attackService.postAttack(
      action.attack,
    )
    yield put(postAttackSuccessActionCreator(response.data))
    yield put(getFights())
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a támadás közben'
    yield put(postAttackFailureActionCreator(errorMessage))
  }
}
