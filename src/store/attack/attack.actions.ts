import {SearchRequest} from '../../model/search.request'
import {AttackTargetsResponse} from '../../model/attack/attackTargets.response'
import {AttackUnitsResponse} from '../../model/attack/attackUnits.response'
import {AttackTarget} from '../../model/attack/attackTarget'
import {AttackUnit} from '../../model/attack/attackUnit'
import {AttackRequest} from '../../model/attack/attack.request'
import {AttackResponse} from '../../model/attack/attack.response'

export const GET_ATTACK_TARGETS_REQUEST = 'GET_ATTACK_TARGETS_REQUEST'
export const GET_ATTACK_TARGETS_SUCCESS = 'GET_ATTACK_TARGETS_SUCCESS'
export const GET_ATTACK_TARGETS_FAILURE = 'GET_ATTACK_TARGETS_FAILURE'
export const GET_ATTACK_UNITS_REQUEST = 'GET_ATTACK_UNITS_REQUEST'
export const GET_ATTACK_UNITS_SUCCESS = 'GET_ATTACK_UNITS_SUCCESS'
export const GET_ATTACK_UNITS_FAILURE = 'GET_ATTACK_UNITS_FAILURE'
export const SELECT_ATTACK_TARGET = 'SELECT_ATTACK_TARGET'
export const SET_ATTACK_UNIT_COUNT = 'SET_ATTACK_UNIT_COUNT'
export const POST_ATTACK_REQUEST = 'POST_ATTACK_REQUEST'
export const POST_ATTACK_SUCCESS = 'POST_ATTACK_SUCCESS'
export const POST_ATTACK_FAILURE = 'POST_ATTACK_FAILURE'

export interface GetAttackTargetsRequestAction {
  type: typeof GET_ATTACK_TARGETS_REQUEST
  search: SearchRequest
}

export interface GetAttackTargetsSuccessAction {
  type: typeof GET_ATTACK_TARGETS_SUCCESS
  response: AttackTargetsResponse
}

export interface GetAttackTargetsFailureAction {
  type: typeof GET_ATTACK_TARGETS_FAILURE
  reason: string | undefined
}

export interface GetAttackUnitsRequestAction {
  type: typeof GET_ATTACK_UNITS_REQUEST
}

export interface GetAttackUnitsSuccessAction {
  type: typeof GET_ATTACK_UNITS_SUCCESS
  response: AttackUnitsResponse
}

export interface GetAttackUnitsFailureAction {
  type: typeof GET_ATTACK_UNITS_FAILURE
  reason: string | undefined
}

export interface SelectAttackTargetAction {
  type: typeof SELECT_ATTACK_TARGET
  target: AttackTarget
}

export interface SetAttackUnitCountAction {
  type: typeof SET_ATTACK_UNIT_COUNT
  unit: AttackUnit
  count: number
}

export interface PostAttackRequestAction {
  type: typeof POST_ATTACK_REQUEST
  attack: AttackRequest
}

export interface PostAttackSuccessAction {
  type: typeof POST_ATTACK_SUCCESS
  response: AttackResponse
}

export interface PostAttackFailureAction {
  type: typeof POST_ATTACK_FAILURE
  reason: string | undefined
}

export type AttackActions =
  | GetAttackTargetsRequestAction
  | GetAttackTargetsSuccessAction
  | GetAttackTargetsFailureAction
  | GetAttackUnitsRequestAction
  | GetAttackUnitsSuccessAction
  | GetAttackUnitsFailureAction
  | SelectAttackTargetAction
  | SetAttackUnitCountAction
  | PostAttackRequestAction
  | PostAttackSuccessAction
  | PostAttackFailureAction

export const getAttackTargets = (
  search: SearchRequest,
): GetAttackTargetsRequestAction => ({
  type: GET_ATTACK_TARGETS_REQUEST,
  search,
})

export const getAttackTargetsSuccessActionCreator = (
  response: AttackTargetsResponse,
): GetAttackTargetsSuccessAction => ({
  type: GET_ATTACK_TARGETS_SUCCESS,
  response,
})

export const getAttackTargetsFailureActionCreator = (
  reason: string,
): GetAttackTargetsFailureAction => ({
  type: GET_ATTACK_TARGETS_FAILURE,
  reason,
})

export const getAttackUnits = (): GetAttackUnitsRequestAction => ({
  type: GET_ATTACK_UNITS_REQUEST,
})

export const getAttackUnitsSuccessActionCreator = (
  response: AttackUnitsResponse,
): GetAttackUnitsSuccessAction => ({
  type: GET_ATTACK_UNITS_SUCCESS,
  response,
})

export const getAttackUnitsFailureActionCreator = (
  reason: string,
): GetAttackUnitsFailureAction => ({
  type: GET_ATTACK_UNITS_FAILURE,
  reason,
})

export const selectAttackTarget = (
  target: AttackTarget,
): SelectAttackTargetAction => ({
  type: SELECT_ATTACK_TARGET,
  target,
})

export const setAttackUnitCount = (
  unit: AttackUnit,
  count: number,
): SetAttackUnitCountAction => ({
  type: SET_ATTACK_UNIT_COUNT,
  unit,
  count,
})

export const attack = (attack: AttackRequest): PostAttackRequestAction => ({
  type: POST_ATTACK_REQUEST,
  attack,
})

export const postAttackSuccessActionCreator = (
  response: AttackResponse,
): PostAttackSuccessAction => ({
  type: POST_ATTACK_SUCCESS,
  response,
})

export const postAttackFailureActionCreator = (
  reason: string,
): PostAttackFailureAction => ({
  type: POST_ATTACK_FAILURE,
  reason,
})
