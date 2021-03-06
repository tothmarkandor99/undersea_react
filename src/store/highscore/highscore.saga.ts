import {all, put, debounce} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {
  GET_HIGHSCORES_REQUEST,
  GetHighscoresRequestAction,
  getHighscoresSuccessActionCreator,
  getHighscoresFailureActionCreator,
  appendNewHighscoresSuccessActionCreator,
} from './highscore.actions'
import highscoreService from '../../utility/services/highscoreService'
import {HighscoreResponse} from '../../model/score/highscore.response'

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
    if (action.search.page === 1) {
      yield put(getHighscoresSuccessActionCreator(response.data))
    } else {
      yield put(appendNewHighscoresSuccessActionCreator(response.data))
    }
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getHighscoresFailureActionCreator(errorMessage))
  }
}
