import {HighscoreResponse} from '../../model/score/highscore.response'
import {SearchRequest} from '../../model/search.request'

export const GET_SCORES_REQUEST = 'GET_SCORES_REQUEST'
export const GET_SCORES_SUCCESS = 'GET_SCORES_SUCCESS'
export const GET_SCORES_FAILURE = 'GET_SCORES_FAILURE'

export interface GetScoresRequestAction {
  type: typeof GET_SCORES_REQUEST
  search: SearchRequest
}

export interface GetScoresSuccessAction {
  type: typeof GET_SCORES_SUCCESS
  response: HighscoreResponse[]
}

export interface GetScoresFailureAction {
  type: typeof GET_SCORES_FAILURE
  reason: string | undefined
}

export type ScoreActions =
  | GetScoresRequestAction
  | GetScoresSuccessAction
  | GetScoresFailureAction

export const getScores = (search: SearchRequest): GetScoresRequestAction => ({
  type: GET_SCORES_REQUEST,
  search,
})

export const getArticlesSuccessActionCreator = (
  scores: HighscoreResponse[],
): GetScoresSuccessAction => ({
  type: GET_SCORES_SUCCESS,
  response: scores,
})

export const getArticlesFailActionCreator = (
  reason: string,
): GetScoresFailureAction => ({
  type: GET_SCORES_FAILURE,
  reason,
})
