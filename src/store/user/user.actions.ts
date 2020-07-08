import {User} from '../../model/user'

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'

export const POST_LOGOUT_REQUEST = 'POST_LOGOUT_REQUEST'
export const POST_LOGOUT_SUCCESS = 'POST_LOGOUT_SUCCESS'
export const POST_LOGOUT_FAILURE = 'POST_LOGOUT_FAILURE'

export interface PostLoginReqestAction {
  type: typeof POST_LOGIN_REQUEST
}
