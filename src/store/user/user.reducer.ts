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
        loggedIn: false,
        user: null,
      }
    default:
      return state
  }
}
