import {all} from 'redux-saga/effects'
import {highscoreSaga} from './src/store/highscore/highscore.saga'
import {buildingSaga} from './src/store/building/building.saga'
import {fightSaga} from './src/store/fight/fight.saga'
import {upgradeSaga} from './src/store/upgrade/upgrade.saga'
import {armySaga} from './src/store/army/army.saga'
import {userSaga} from './src/store/user/user.saga'
import {statsSaga} from './src/store/stats/stats.saga'
import {attackSaga} from './src/store/attack/attack.saga'

export function* rootSaga() {
  yield all([
    highscoreSaga(),
    buildingSaga(),
    fightSaga(),
    upgradeSaga(),
    armySaga(),
    userSaga(),
    statsSaga(),
    attackSaga(),
  ])
}
