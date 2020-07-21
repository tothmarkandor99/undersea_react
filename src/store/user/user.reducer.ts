import {initialUserStore, UserStore} from './user.store'
import {User} from '../../model/user/user'
import {
  UserActions,
  BYPASS_LOGIN,
  BYPASS_LOGOUT,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_REGISTER_FAILURE,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_REQUEST,
} from './user.actions'

export const userReducer = (
  state = initialUserStore,
  action: UserActions,
): UserStore => {
  switch (action.type) {
    case BYPASS_LOGIN:
      return {
        ...state,
        loggedIn: true,
      }
    case BYPASS_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      }
    case POST_LOGIN_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        accessToken: action.response.accessToken,
        refreshToken: action.response.refreshToken,
        loggedIn: true,
      }
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        loggedIn: false,
      }
    case POST_REGISTER_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        accessToken: action.response.accessToken,
        refreshToken: action.response.refreshToken,
        loggedIn: true,
      }
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        loggedIn: false,
      }
    default:
      return state
  }
}
