import {StatsResponse} from '../../model/stats/stats.response'

export const GET_STATS_REQUEST = 'GET_STATS_REQUEST'
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS'
export const GET_STATS_FAILURE = 'GET_STATS_FAILURE'

export interface GetStatsRequestAction {
  type: typeof GET_STATS_REQUEST
}

export interface GetStatsSuccessAction {
  type: typeof GET_STATS_SUCCESS
  response: StatsResponse
}

export interface GetStatsFailureAction {
  type: typeof GET_STATS_FAILURE
  reason: string | undefined
}

export type StatsActions =
  | GetStatsRequestAction
  | GetStatsSuccessAction
  | GetStatsFailureAction

export const getStats = (): GetStatsRequestAction => ({
  type: GET_STATS_REQUEST,
})

export const getStatsSuccessActionCreator = (
  response: StatsResponse,
): GetStatsSuccessAction => ({
  type: GET_STATS_SUCCESS,
  response,
})

export const getStatsFailureActionCreator = (
  reason: string,
): GetStatsFailureAction => ({
  type: GET_STATS_FAILURE,
  reason,
})
