import {
  PostLoginRequestAction,
  postLoginSuccessActionCreator,
  postLoginFailureActionCreator,
  POST_LOGIN_REQUEST,
  PostRegisterRequestAction,
  postRegisterSuccessActionCreator,
  postRegisterFailureActionCreator,
  POST_REGISTER_REQUEST,
  POST_LOGOUT_REQUEST,
  PostLogoutRequestAction,
  postLogoutSuccessActionCreator,
  postLogoutFailureActionCreator,
} from './user.actions'
import {AxiosResponse} from 'axios'
import {LoginResponse} from '../../model/user/login.response'
import userService from '../../utility/services/userService'
import {put, takeEvery, all} from 'redux-saga/effects'
import {RegisterResponse} from '../../model/user/register.response'
import * as SecureStore from 'expo-secure-store'
import {reset} from '../../../store'

export function* userSaga() {
  yield all([watchLogin(), watchRegister(), watchLogout()])
}

function* watchLogin() {
  yield takeEvery(POST_LOGIN_REQUEST, postLoginActionWatcher)
}

function* watchRegister() {
  yield takeEvery(POST_REGISTER_REQUEST, postRegisterActionWatcher)
}

function* watchLogout() {
  yield takeEvery(POST_LOGOUT_REQUEST, postLogoutActionWatcher)
}

function* postLoginActionWatcher(action: PostLoginRequestAction) {
  // TODO: ez lehet async? Ádám
  try {
    const response: AxiosResponse<LoginResponse> = yield userService.logIn(
      action.user,
    )
    saveTokens(response.data.accessToken, response.data.refreshToken)
    yield put(postLoginSuccessActionCreator(response.data))
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
    saveTokens(response.data.accessToken, response.data.refreshToken)
    yield put(postRegisterSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba regisztráció közben'
    yield put(postRegisterFailureActionCreator(errorMessage))
  }
}

function* postLogoutActionWatcher(action: PostLogoutRequestAction) {
  try {
    yield userService.logout()
    yield put(postLogoutSuccessActionCreator())
    yield put(reset())
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba kijelentkezés közben'
    yield put(postLogoutFailureActionCreator(errorMessage))
  }
}

async function saveTokens(accessToken: string, refreshToken: string) {
  await SecureStore.setItemAsync('access_token', accessToken)
  await SecureStore.setItemAsync('refresh_token', refreshToken)
}
