import {HighscoreResponse} from '../../model/score/highscore.response'
import {SearchRequest} from '../../model/search/search.request'

export const GET_HIGHSCORES_REQUEST = 'GET_HIGHSCORES_REQUEST'
export const GET_HIGHSCORES_SUCCESS = 'GET_HIGHSCORES_SUCCESS'
export const GET_HIGHSCORES_FAILURE = 'GET_HIGHSCORES_FAILURE'

export const SET_HIGHSCORE_SEARCH_PHRASE = 'SET_HIGHSCORE_SEARCH_PHRASE'

export interface GetHighscoresRequestAction {
  type: typeof GET_HIGHSCORES_REQUEST
  search: SearchRequest
}

export interface GetHighscoresSuccessAction {
  type: typeof GET_HIGHSCORES_SUCCESS
  response: HighscoreResponse
}

export interface GetHighscoresFailureAction {
  type: typeof GET_HIGHSCORES_FAILURE
  reason: string | undefined
}

export interface SetSearchPhraseAction {
  type: typeof SET_HIGHSCORE_SEARCH_PHRASE
  searchPhrase: string
}

export type HighscoreActions =
  | GetHighscoresRequestAction
  | GetHighscoresSuccessAction
  | GetHighscoresFailureAction
  | SetSearchPhraseAction

export const getHighscores = (
  search: SearchRequest,
): GetHighscoresRequestAction => ({
  type: GET_HIGHSCORES_REQUEST,
  search,
})

export const getHighscoresSuccessActionCreator = (
  scores: HighscoreResponse,
): GetHighscoresSuccessAction => ({
  type: GET_HIGHSCORES_SUCCESS,
  response: scores,
})

export const getHighscoresFailureActionCreator = (
  reason: string,
): GetHighscoresFailureAction => ({
  type: GET_HIGHSCORES_FAILURE,
  reason,
})

export const setSearchPhrase = (
  searchPhrase: string,
): SetSearchPhraseAction => ({
  type: SET_HIGHSCORE_SEARCH_PHRASE,
  searchPhrase,
})
