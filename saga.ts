import {all} from 'redux-saga/effects'
import {highscoreSaga} from './src/store/highscore/highscore.saga'

export function* rootSaga() {
  yield all([highscoreSaga()])
}

/* TODO: sagákat beírni */
