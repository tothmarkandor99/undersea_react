import {AnyAction, combineReducers, Reducer} from 'redux'
import {UserStore} from './src/store/user/user.store'
import {userReducer} from './src/store/user/user.reducer'

export interface IAppStore {
  user: UserStore
  // TODO: többi store
}

export interface IApplicationState {
  app: IAppStore
}

export const RESET_EVERYTHING = 'RESET_EVERYTHING'

export interface ResetAction {
  type: typeof RESET_EVERYTHING
}

export const reset = (): ResetAction => ({
  type: RESET_EVERYTHING,
})

export const appReducer = combineReducers<IAppStore>({
  user: userReducer,
  // TODO: többi reducer
})

export const appRootReducer: Reducer<IAppStore> = (
  state: IAppStore | undefined,
  action: AnyAction,
): IAppStore => {
  if (action.type === RESET_EVERYTHING) {
    state = undefined
  }
  return appReducer(state, action)
}
