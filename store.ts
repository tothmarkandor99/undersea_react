import {AnyAction, combineReducers, Reducer} from 'redux'
import {UserStore} from './src/store/user/user.store'
import {userReducer} from './src/store/user/user.reducer'
import {HighscoreStore} from './src/store/highscore/highscore.store'
import {highscoreReducer} from './src/store/highscore/highscore.reducer'
import {BuildingStore} from './src/store/building/building.store'
import {buildingReducer} from './src/store/building/building.reducer'
import {FightStore} from './src/store/fight/fight.store'
import {fightReducer} from './src/store/fight/fight.reducer'
import {upgradeReducer} from './src/store/upgrade/upgrade.reducer'
import {UpgradeStore} from './src/store/upgrade/upgrade.store'
import {armyReducer} from './src/store/army/army.reducer'
import {ArmyStore} from './src/store/army/army.store'
import {StatsStore} from './src/store/stats/stats.store'
import {statsReducer} from './src/store/stats/stats.reducer'

export interface IAppStore {
  user: UserStore
  highscore: HighscoreStore
  building: BuildingStore
  fight: FightStore
  upgrade: UpgradeStore
  army: ArmyStore
  stats: StatsStore
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
  highscore: highscoreReducer,
  user: userReducer,
  building: buildingReducer,
  fight: fightReducer,
  upgrade: upgradeReducer,
  army: armyReducer,
  stats: statsReducer,
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
