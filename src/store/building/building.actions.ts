import {BuildingResponse} from '../../model/building/building.response'
import {Building} from '../../model/building/building'
import {BuildResponse} from '../../model/building/build.response'
import {BuildRequest} from '../../model/building/build.request'

export const GET_BUILDINGS_REQUEST = 'GET_BUILDINGS_REQUEST'
export const GET_BUILDINGS_SUCCESS = 'GET_BUILDINGS_SUCCESS'
export const GET_BUILDINGS_FAILURE = 'GET_BUILDINGS_FAILURE'

export const SELECT_BUILDING = 'SELECT_BUILDING'
export const RESET_SELECTION = 'RESET_SELECTION'

export const POST_BUILD_REQUEST = 'POST_BUILD_REQUEST'
export const POST_BUILD_SUCCESS = 'POST_BUILD_SUCCESS'
export const POST_BUILD_FAILURE = 'POST_BUILD_FAILURE'

export interface GetBuildingsRequestAction {
  type: typeof GET_BUILDINGS_REQUEST
}

export interface GetBuildingsSuccessAction {
  type: typeof GET_BUILDINGS_SUCCESS
  response: BuildingResponse
}

export interface GetBuildingsFailureAction {
  type: typeof GET_BUILDINGS_FAILURE
  reason: string | undefined
}

export interface SelectBuildingAction {
  type: typeof SELECT_BUILDING
  building: Building | undefined
}

export interface PostBuildRequestAction {
  type: typeof POST_BUILD_REQUEST
  building: BuildRequest
}

export interface PostBuildSuccessAction {
  type: typeof POST_BUILD_SUCCESS
  response: BuildResponse
}

export interface PostBuildFailureAction {
  type: typeof POST_BUILD_FAILURE
  reason: string | undefined
}

export type BuildingActions =
  | GetBuildingsRequestAction
  | GetBuildingsSuccessAction
  | GetBuildingsFailureAction
  | SelectBuildingAction
  | PostBuildRequestAction
  | PostBuildSuccessAction
  | PostBuildFailureAction

export const getBuildings = (): GetBuildingsRequestAction => ({
  type: GET_BUILDINGS_REQUEST,
})

export const getBuildingsSuccesActionCreator = (
  buildings: BuildingResponse,
): GetBuildingsSuccessAction => ({
  type: GET_BUILDINGS_SUCCESS,
  response: buildings,
})

export const getBuildingsFailureActionCreator = (
  reason: string,
): GetBuildingsFailureAction => ({
  type: GET_BUILDINGS_FAILURE,
  reason,
})

export const selectBuilding = (
  building: Building | undefined,
): SelectBuildingAction => ({
  type: SELECT_BUILDING,
  building,
})

export const postBuild = (building: BuildRequest): PostBuildRequestAction => ({
  type: POST_BUILD_REQUEST,
  building,
})

export const postBuildSuccesActionCreator = (
  building: BuildResponse,
): PostBuildSuccessAction => ({
  type: POST_BUILD_SUCCESS,
  response: building,
})

export const postBuildFailureActionCreator = (
  reason: string,
): PostBuildFailureAction => ({
  type: POST_BUILD_FAILURE,
  reason,
})
