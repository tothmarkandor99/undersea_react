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
} from './user.actions'

export const userReducer = (
  state = initialUserStore,
  action: UserActions,
): UserStore => {
  switch (action.type) {
    case BYPASS_LOGIN:
      return {
        ...state,
        user: {
          userId: -1,
          name: 'Teszt Jóska',
          city: 'Halfalva',
          place: 13,
          round: 8,
        },
      }
    case BYPASS_LOGOUT:
      return {
        ...state,
        user: undefined,
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
        user: <User>{
          /* TODO: API alapján */
        },
      }
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        user: undefined,
      }
    case POST_REGISTER_SUCCESS:
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
        user: <User>{
          /* TODO: API alapján */
        },
      }
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        user: undefined,
      }
    default:
      return state
  }
}
