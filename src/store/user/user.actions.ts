import {User} from '../../model/user'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'

export const POST_LOGOUT_REQUEST = 'POST_LOGOUT_REQUEST'
export const POST_LOGOUT_SUCCESS = 'POST_LOGOUT_SUCCESS'
export const POST_LOGOUT_FAILURE = 'POST_LOGOUT_FAILURE'

export const BYPASS_LOGIN = 'BYPASS_LOGIN'
export const BYPASS_LOGOUT = 'BYPASS_LOGOUT'

export interface BypassLoginAction {
  type: typeof BYPASS_LOGIN
}

export interface BypassLogoutAction {
  type: typeof BYPASS_LOGOUT
}

export type LoginActions = BypassLoginAction | BypassLogoutAction

export const BypassLogin = (): BypassLoginAction => ({
  type: BYPASS_LOGIN,
})

export const BypassLogout = (): BypassLoginAction => ({
  type: BYPASS_LOGIN,
})
