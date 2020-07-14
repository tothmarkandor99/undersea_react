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
    yield put(postRegisterSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba regisztráció közben'
    yield put(postRegisterFailureActionCreator(errorMessage))
  }
}
