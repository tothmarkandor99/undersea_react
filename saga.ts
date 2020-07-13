import {all} from 'redux-saga/effects'
import {highscoreSaga} from './src/store/highscore/highscore.saga'
import {buildingSaga} from './src/store/building/building.saga'
import {fightSaga} from './src/store/fight/fight.saga'
import {upgradeSaga} from './src/store/upgrade/upgrade.saga'

export function* rootSaga() {
  yield all([highscoreSaga(), buildingSaga(), fightSaga(), upgradeSaga()])
}

/* TODO: sagákat beírni */
