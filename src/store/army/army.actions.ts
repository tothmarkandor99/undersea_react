import {PurchasableUnitResponse} from '../../model/army/purchasableUnit.response'
import {PurchaseUnitResponse} from '../../model/army/purchaseUnit.response'
import {PurchaseUnitRequest} from '../../model/army/purchaseUnit.request'

export const GET_ARMY_REQUEST = 'GET_ARMY_REQUEST'
export const GET_ARMY_SUCCESS = 'GET_ARMY_SUCCESS'
export const GET_ARMY_FAILURE = 'GET_ARMY_FAILURE'
export const POST_BUY_ARMY_REQUEST = 'POST_BUY_ARMY_REQUEST'
export const POST_BUY_ARMY_SUCCESS = 'POST_BUY_ARMY_SUCCESS'
export const POST_BUY_ARMY_FAILURE = 'POST_BUY_ARMY_FAILURE'

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

export interface PostBuyArmyRequestAction {
  type: typeof POST_BUY_ARMY_REQUEST
  army: PurchaseUnitRequest
}

export interface PostBuyArmySuccessAction {
  type: typeof POST_BUY_ARMY_SUCCESS
  response: PurchaseUnitResponse
}

export interface PostBuyArmyFailureAction {
  type: typeof POST_BUY_ARMY_FAILURE
  reason: string | undefined
}

export type ArmyActions =
  | GetArmyRequestAction
  | GetArmySuccessAction
  | GetArmyFailureAction
  | PostBuyArmyRequestAction
  | PostBuyArmySuccessAction
  | PostBuyArmyFailureAction

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

export const postBuyArmy = (
  army: PurchaseUnitRequest,
): PostBuyArmyRequestAction => ({
  type: POST_BUY_ARMY_REQUEST,
  army,
})

export const postBuyArmySuccessActionCreator = (
  response: PurchaseUnitResponse,
): PostBuyArmySuccessAction => ({
  type: POST_BUY_ARMY_SUCCESS,
  response,
})

export const postBuyArmyFailureActionCreator = (
  reason: string,
): PostBuyArmyFailureAction => ({
  type: POST_BUY_ARMY_FAILURE,
  reason,
})
