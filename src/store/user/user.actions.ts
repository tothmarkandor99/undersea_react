import {LoginRequest} from '../../model/user/login.request'
import {LoginResponse} from '../../model/user/login.response'
import {RegisterRequest} from '../../model/user/register.request'
import {RegisterResponse} from '../../model/user/register.response'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILURE = 'POST_REGISTER_FAILURE'

export const POST_LOGOUT_REQUEST = 'POST_LOGOUT_REQUEST'
export const POST_LOGOUT_SUCCESS = 'POST_LOGOUT_SUCCESS'
export const POST_LOGOUT_FAILURE = 'POST_LOGOUT_FAILURE'

export interface PostLoginRequestAction {
  type: typeof POST_LOGIN_REQUEST
  user: LoginRequest
}

export interface PostLoginSuccessAction {
  type: typeof POST_LOGIN_SUCCESS
  response: LoginResponse
}

export interface PostLoginFailureAction {
  type: typeof POST_LOGIN_FAILURE
  reason: string | undefined
}

export interface PostRegisterRequestAction {
  type: typeof POST_REGISTER_REQUEST
  user: RegisterRequest
}

export interface PostRegisterSuccessAction {
  type: typeof POST_REGISTER_SUCCESS
  response: RegisterResponse
}

export interface PostRegisterFailureAction {
  type: typeof POST_REGISTER_FAILURE
  reason: string | undefined
}

export interface PostLogoutRequestAction {
  type: typeof POST_LOGOUT_REQUEST
}

export interface PostLogoutSuccessAction {
  type: typeof POST_LOGOUT_SUCCESS
}

export interface PostLogoutFailureAction {
  type: typeof POST_LOGOUT_FAILURE
  reason: string | undefined
}

export type UserActions =
  | PostLoginRequestAction
  | PostLoginSuccessAction
  | PostLoginFailureAction
  | PostRegisterRequestAction
  | PostRegisterSuccessAction
  | PostRegisterFailureAction
  | PostLogoutRequestAction
  | PostLogoutSuccessAction
  | PostLogoutFailureAction

export const login = (user: LoginRequest): PostLoginRequestAction => ({
  type: POST_LOGIN_REQUEST,
  user,
})

export const postLoginSuccessActionCreator = (
  response: LoginResponse,
): PostLoginSuccessAction => ({
  type: POST_LOGIN_SUCCESS,
  response,
})

export const postLoginFailureActionCreator = (
  reason: string,
): PostLoginFailureAction => ({
  type: POST_LOGIN_FAILURE,
  reason,
})

export const register = (user: RegisterRequest): PostRegisterRequestAction => ({
  type: POST_REGISTER_REQUEST,
  user,
})

export const postRegisterSuccessActionCreator = (
  response: RegisterResponse,
): PostRegisterSuccessAction => ({
  type: POST_REGISTER_SUCCESS,
  response,
})

export const postRegisterFailureActionCreator = (
  reason: string,
): PostRegisterFailureAction => ({
  type: POST_REGISTER_FAILURE,
  reason,
})

export const logout = (): PostLogoutRequestAction => ({
  type: POST_LOGOUT_REQUEST,
})

export const postLogoutSuccessActionCreator = (): PostLogoutSuccessAction => ({
  type: POST_LOGOUT_SUCCESS,
})

export const postLogoutFailureActionCreator = (
  reason: string,
): PostLogoutFailureAction => ({
  type: POST_LOGOUT_FAILURE,
  reason,
})
