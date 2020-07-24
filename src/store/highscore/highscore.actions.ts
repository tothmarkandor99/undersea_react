import {HighscoreResponse} from '../../model/score/highscore.response'
import {SearchRequest} from '../../model/search/search.request'

export const GET_HIGHSCORES_REQUEST = 'GET_HIGHSCORES_REQUEST'
export const GET_HIGHSCORES_SUCCESS = 'GET_HIGHSCORES_SUCCESS'
export const GET_HIGHSCORES_FAILURE = 'GET_HIGHSCORES_FAILURE'

export const SET_HIGHSCORE_SEARCH_PHRASE = 'SET_HIGHSCORE_SEARCH_PHRASE'
export const INCREMENT_HIGHSCORE_PAGE = 'INCREMENT_HIGHSCORE_PAGE'
export const APPEND_NEW_HIGHSCORES = 'APPEND_NEW_HIGHSCORES'

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

export interface IncrementHighscorePageAction {
  type: typeof INCREMENT_HIGHSCORE_PAGE
}

export interface AppendNewHighscoresSuccessAction {
  type: typeof APPEND_NEW_HIGHSCORES
  response: HighscoreResponse
}

export type HighscoreActions =
  | GetHighscoresRequestAction
  | GetHighscoresSuccessAction
  | GetHighscoresFailureAction
  | SetSearchPhraseAction
  | IncrementHighscorePageAction
  | AppendNewHighscoresSuccessAction

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

export const incrementHighscorePage = (): IncrementHighscorePageAction => ({
  type: INCREMENT_HIGHSCORE_PAGE,
})

export const appendNewHighscoresSuccessActionCreator = (
  scores: HighscoreResponse,
): AppendNewHighscoresSuccessAction => ({
  type: APPEND_NEW_HIGHSCORES,
  response: scores,
})
