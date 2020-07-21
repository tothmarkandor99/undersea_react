import {UpgradeResponse} from '../../model/upgrade/upgrade.response'
import {BuyUpgradeResponse} from '../../model/upgrade/buyUpgrade.response'
import {BuyUpgradeRequest} from '../../model/upgrade/buyUpgrade.request'

export const GET_UPGRADES_REQUEST = 'GET_UPGRADES_REQUEST'
export const GET_UPGRADES_SUCCESS = 'GET_UPGRADES_SUCCESS'
export const GET_UPGRADES_FAILURE = 'GET_UPGRADES_FAILURE'
export const POST_BUY_UPGRADE_REQUEST = 'POST_BUY_UPGRADE_REQUEST'
export const POST_BUY_UPGRADE_SUCCESS = 'POST_BUY_UPGRADE_SUCCESS'
export const POST_BUY_UPGRADE_FAILURE = 'POST_BUY_UPGRADE_FAILURE'

export interface GetUpgradesRequestAction {
  type: typeof GET_UPGRADES_REQUEST
}

export interface GetUpgradesSuccessAction {
  type: typeof GET_UPGRADES_SUCCESS
  response: UpgradeResponse
}

export interface GetUpgradesFailureAction {
  type: typeof GET_UPGRADES_FAILURE
  reason: string | undefined
}

export interface PostBuyUpgradeRequestAction {
  type: typeof POST_BUY_UPGRADE_REQUEST
  upgrade: BuyUpgradeRequest
}

export interface PostBuyUpgradeSuccessAction {
  type: typeof POST_BUY_UPGRADE_SUCCESS
  response: BuyUpgradeResponse
}

export interface PostBuyUpgradeFailureAction {
  type: typeof POST_BUY_UPGRADE_FAILURE
  reason: string | undefined
}

export type UpgradeActions =
  | GetUpgradesRequestAction
  | GetUpgradesSuccessAction
  | GetUpgradesFailureAction
  | PostBuyUpgradeRequestAction
  | PostBuyUpgradeSuccessAction
  | PostBuyUpgradeFailureAction

export const getUpgrades = (): GetUpgradesRequestAction => ({
  type: GET_UPGRADES_REQUEST,
})

export const getUpgradesSuccessActionCreator = (
  upgrades: UpgradeResponse,
): GetUpgradesSuccessAction => ({
  type: GET_UPGRADES_SUCCESS,
  response: upgrades,
})

export const getUpgradesFailureActionCreator = (
  reason: string,
): GetUpgradesFailureAction => ({
  type: GET_UPGRADES_FAILURE,
  reason,
})

export const postBuyUpgrade = (id: number): PostBuyUpgradeRequestAction => ({
  type: POST_BUY_UPGRADE_REQUEST,
  upgrade: <BuyUpgradeRequest>{id: id},
})

export const postBuyUpgradeSuccessActionCreator = (
  response: BuyUpgradeResponse,
): PostBuyUpgradeSuccessAction => ({
  type: POST_BUY_UPGRADE_SUCCESS,
  response,
})

export const postBuyUpgradeFailureActionCreator = (
  reason: string,
): PostBuyUpgradeFailureAction => ({
  type: POST_BUY_UPGRADE_FAILURE,
  reason,
})
