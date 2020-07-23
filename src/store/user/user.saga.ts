import {
  PostLoginRequestAction,
  postLoginSuccessActionCreator,
  postLoginFailureActionCreator,
  POST_LOGIN_REQUEST,
  PostRegisterRequestAction,
  postRegisterSuccessActionCreator,
  postRegisterFailureActionCreator,
  POST_REGISTER_REQUEST,
} from './user.actions'
import {AxiosResponse} from 'axios'
import {LoginResponse} from '../../model/user/login.response'
import userService from '../../utility/services/userService'
import {put, takeEvery, all} from 'redux-saga/effects'
import {RegisterResponse} from '../../model/user/register.response'
import {AsyncStorage} from 'react-native'
import {getStats} from '../stats/stats.actions'
import {getArmy} from '../army/army.actions'
import {getUpgrades} from '../upgrade/upgrade.actions'
import {getHighscores} from '../highscore/highscore.actions'
import {getFights} from '../fight/fight.actions'
import {getBuildings} from '../building/building.actions'

export function* userSaga() {
  yield all([watchLogin(), watchRegister()])
}

function* watchLogin() {
  yield takeEvery(POST_LOGIN_REQUEST, postLoginActionWatcher)
}

function* watchRegister() {
  yield takeEvery(POST_REGISTER_REQUEST, postRegisterActionWatcher)
}

function* postLoginActionWatcher(action: PostLoginRequestAction) {
  try {
    const response: AxiosResponse<LoginResponse> = yield userService.logIn(
      action.user,
    )
    AsyncStorage.setItem('access_token', response.data.accessToken)
    AsyncStorage.setItem('refresh_token', response.data.refreshToken)
    yield put(postLoginSuccessActionCreator(response.data))
    yield put(getStats())
    yield put(getArmy())
    yield put(getBuildings())
    yield put(getFights())
    yield put(getUpgrades())
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba bejelentkezés közben'
    yield put(postLoginFailureActionCreator(errorMessage))
  }
}

function* postRegisterActionWatcher(action: PostRegisterRequestAction) {
  try {
    const response: AxiosResponse<RegisterResponse> = yield userService.register(
      action.user,
    )
    AsyncStorage.setItem('access_token', response.data.accessToken)
    AsyncStorage.setItem('refresh_token', response.data.refreshToken)
    yield put(postRegisterSuccessActionCreator(response.data))
    yield put(getStats())
    yield put(getArmy())
    yield put(getBuildings())
    yield put(getFights())
    // TODO: getHighscores refaktorálás ne kelljen paraméter
    yield put(getUpgrades())
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba regisztráció közben'
    yield put(postRegisterFailureActionCreator(errorMessage))
  }
}
