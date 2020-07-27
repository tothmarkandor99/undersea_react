import {initialUserStore, UserStore} from './user.store'
import {
  UserActions,
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_REGISTER_FAILURE,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_REQUEST,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS,
  POST_LOGOUT_FAILURE,
} from './user.actions'

export const userReducer = (
  state = initialUserStore,
  action: UserActions,
): UserStore => {
  switch (action.type) {
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
        loggedIn: true,
      }
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        loggedIn: false,
      }
    case POST_LOGOUT_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case POST_LOGOUT_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        loggedIn: false,
      }
    case POST_LOGOUT_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
      }
    default:
      return state
  }
}
