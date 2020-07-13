import {all, put, debounce} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {
  GET_HIGHSCORES_REQUEST,
  GetHighscoresRequestAction,
  getHighscoresSuccessActionCreator,
  getHighscoresFailureActionCreator,
} from './highscore.actions'
import highscoreService from '../../utility/services/highscoreService'
import {HighscoreResponse} from '../../model/score/highscore.response'

export function* highscoreSaga() {
  yield all([watchPost()])
}

function* watchPost() {
  yield debounce(500, GET_HIGHSCORES_REQUEST, getHighscoresActionWatcher) // TODO: azonnal: takeEvery
}

function* getHighscoresActionWatcher(action: GetHighscoresRequestAction) {
  try {
    const response: AxiosResponse<HighscoreResponse> = yield highscoreService.searchHighscores(
      action.search,
    )
    yield put(getHighscoresSuccessActionCreator(response.data))
  } catch (error) {
    console.log(error)
    const errorMessage = 'Hiba a betöltés közben'
    yield put(getHighscoresFailureActionCreator(errorMessage))
  }
}
