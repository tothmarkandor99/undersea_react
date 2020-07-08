import {initialUserStore, UserStore} from './user.store'
import {LoginActions, BYPASS_LOGIN, BYPASS_LOGOUT} from './user.actions'

export const userReducer = (
  state = initialUserStore,
  action: LoginActions,
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
    default:
      return state
  }
}
