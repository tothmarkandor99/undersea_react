import {PurchasableUnitResponse} from '../../model/army/purchasableUnit.response'

export const GET_ARMY_REQUEST = 'GET_ARMY_REQUEST'
export const GET_ARMY_SUCCESS = 'GET_ARMY_SUCCESS'
export const GET_ARMY_FAILURE = 'GET_ARMY_FAILURE'

export interface GetArmyRequestAction {
  type: typeof GET_ARMY_REQUEST
}

export interface GetArmySuccessAction {
  type: typeof GET_ARMY_SUCCESS
  response: PurchasableUnitResponse
}

export interface GetArmyFailureAction {
  type: typeof GET_ARMY_FAILURE
  reason: string | undefined
}

export type ArmyActions =
  | GetArmyRequestAction
  | GetArmySuccessAction
  | GetArmyFailureAction

export const getArmy = (): GetArmyRequestAction => ({
  type: GET_ARMY_REQUEST,
})

export const getArmySuccessActionCreator = (
  response: PurchasableUnitResponse,
): GetArmySuccessAction => ({
  type: GET_ARMY_SUCCESS,
  response,
})

export const getArmyFailureActionCreator = (
  reason: string,
): GetArmyFailureAction => ({
  type: GET_ARMY_FAILURE,
  reason,
})
