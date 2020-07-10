import {AnyAction, combineReducers, Reducer} from 'redux'
import {UserStore} from './src/store/user/user.store'
import {userReducer} from './src/store/user/user.reducer'
import {HighscoreStore} from './src/store/highscore/highscore.store'
import {highscoreReducer} from './src/store/highscore/highscore.reducer'
import {BuildingStore} from './src/store/building/building.store'
import {buildingReducer} from './src/store/building/building.reducer'

export interface IAppStore {
  user: UserStore
  highscore: HighscoreStore
  building: BuildingStore
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
  highscore: highscoreReducer,
  building: buildingReducer,
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
