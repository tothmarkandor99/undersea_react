import {FightResponse} from '../../model/fight/fight.response'
import {Fight} from '../../model/fight/fight'

export const GET_FIGHTS_REQUEST = 'GET_FIGHTS_REQUEST'
export const GET_FIGHTS_SUCCESS = 'GET_FIGHTS_SUCCESS'
export const GET_FIGHTS_FAILURE = 'GET_FIGHTS_FAILURE'

export interface GetFightsRequestAction {
  type: typeof GET_FIGHTS_REQUEST
}

export interface GetFightsSuccessAction {
  type: typeof GET_FIGHTS_SUCCESS
  response: FightResponse
}

export interface GetFightsFailureAction {
  type: typeof GET_FIGHTS_FAILURE
  reason: string | undefined
}

export type FightActions =
  | GetFightsRequestAction
  | GetFightsSuccessAction
  | GetFightsFailureAction

export const getFights = (): GetFightsRequestAction => ({
  type: GET_FIGHTS_REQUEST,
})

export const getFightsSuccessActionCreator = (
  fights: FightResponse,
): GetFightsSuccessAction => ({
  type: GET_FIGHTS_SUCCESS,
  response: fights,
})

export const getFightsFailureActionCreator = (
  reason: string,
): GetFightsFailureAction => ({
  type: GET_FIGHTS_FAILURE,
  reason,
})
