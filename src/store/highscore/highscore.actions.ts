import {HighscoreResponse} from '../../model/score/highscore.response'
import {SearchRequest} from '../../model/search.request'

export const GET_HIGHSCORES_REQUEST = 'GET_HIGHSCORES_REQUEST'
export const GET_HIGHSCORES_SUCCESS = 'GET_HIGHSCORES_SUCCESS'
export const GET_HIGHSCORES_FAILURE = 'GET_HIGHSCORES_FAILURE'

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

export type HighscoreActions =
  | GetHighscoresRequestAction
  | GetHighscoresSuccessAction
  | GetHighscoresFailureAction

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
