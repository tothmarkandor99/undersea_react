import {UpgradeResponse} from '../../model/upgrade/upgrade.response'

export const GET_UPGRADES_REQUEST = 'GET_UPGRADES_REQUEST'
export const GET_UPGRADES_SUCCESS = 'GET_UPGRADES_SUCCESS'
export const GET_UPGRADES_FAILURE = 'GET_UPGRADES_FAILURE'

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

export type UpgradeActions =
  | GetUpgradesRequestAction
  | GetUpgradesSuccessAction
  | GetUpgradesFailureAction

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
