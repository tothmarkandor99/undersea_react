import {all, takeEvery, put, debounce} from 'redux-saga/effects'
import {
  GET_HIGHSCORES_REQUEST,
  GetHighscoresRequestAction,
  getHighscoresSuccessActionCreator,
  getHighscoresFailureActionCreator,
} from './highscore.actions'
import highscoreService from '../../utility/services/highscoreService'
import {HighscoreResponse} from '../../model/score/highscore.response'
import {AxiosResponse} from 'axios'

export function* highscoreSaga() {
  yield all([watchPost()])
}

function* watchPost() {
  yield debounce(1000, GET_HIGHSCORES_REQUEST, getHighscoresActionWatcher)
}

function* getHighscoresActionWatcher(action: GetHighscoresRequestAction) {
  try {
    const response: AxiosResponse<HighscoreResponse> = yield highscoreService.searchHighscores(
      action.search,
    )
    console.log('Response data type:', typeof response.data)
    yield put(getHighscoresSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getHighscoresFailureActionCreator(errorMessage))
  }
}
