import {initialAttackStore, AttackStore} from './attack.store'
import {
  AttackActions,
  GET_ATTACK_TARGETS_REQUEST,
  GET_ATTACK_TARGETS_SUCCESS,
  GET_ATTACK_TARGETS_FAILURE,
  GET_ATTACK_UNITS_REQUEST,
  GET_ATTACK_UNITS_SUCCESS,
  GET_ATTACK_UNITS_FAILURE,
  SELECT_ATTACK_TARGET,
  SET_ATTACK_UNIT_COUNT,
  POST_ATTACK_REQUEST,
  POST_ATTACK_SUCCESS,
  POST_ATTACK_FAILURE,
} from './attack.actions'
import {AttackTarget} from '../../model/attack/attackTarget'
import {AttackUnit} from '../../model/attack/attackUnit'
import {AttackResponse} from '../../model/attack/attack.response'
import {Config} from '../../constants/config'
import {SET_SEARCH_PHRASE} from '../highscore/highscore.actions'
import {Search} from '../../model/search/search'

export const attackReducer = (
  state = initialAttackStore,
  action: AttackActions,
): AttackStore => {
  switch (action.type) {
    case GET_ATTACK_TARGETS_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
        attackTargets: [],
        selectedTargetId: undefined,
      }
    case GET_ATTACK_TARGETS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        attackTargets: action.response.map(
          item =>
            <AttackTarget>{
              id: item.id,
              name: item.userName,
              selected: false,
            },
        ),
        selectedTargetId: undefined,
      }
    case GET_ATTACK_TARGETS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        attackTargets: [],
        selectedTargetId: undefined,
      }
    case GET_ATTACK_UNITS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
        attackUnits: [],
        selectedUnitsCount: 0,
      }
    case GET_ATTACK_UNITS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        attackUnits: action.response.map(
          item =>
            <AttackUnit>{
              id: item.id,
              name: item.name,
              maxCount: item.availableCount,
              imageUrl: Config.resourceUrl + item.imageUrl,
              count: 0,
            },
        ),
        selectedUnitsCount: 0,
      }
    case GET_ATTACK_UNITS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.reason,
        attackUnits: [],
        selectedUnitsCount: 0,
      }
    case SELECT_ATTACK_TARGET:
      return {
        ...state,
        selectedTargetId:
          state.selectedTargetId === action.target.id
            ? undefined
            : action.target.id,
      }
    case SET_ATTACK_UNIT_COUNT:
      return {
        ...state,
        attackUnits: state.attackUnits.map(
          item =>
            <AttackUnit>{
              ...item,
              count: item.id === action.unit.id ? action.count : item.count,
            },
        ),
        selectedUnitsCount:
          state.selectedUnitsCount -
          countFromAttackUnitId(state.attackUnits, action.unit.id) +
          action.count,
      }
    case POST_ATTACK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case POST_ATTACK_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        attackUnits: state.attackUnits.map(
          item =>
            <AttackUnit>{
              ...item,
              maxCount:
                item.maxCount -
                countFromAttackResponseId(action.response, item.id),
              count: 0,
            },
        ),
      }
    case POST_ATTACK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.reason,
      }
    case SET_SEARCH_PHRASE:
      return {
        ...state,
        search: <Search>{
          searchPhrase: action.searchPhrase,
          itemPerPage: Config.defaultSearchItemsPerPage,
          page: 1,
        },
      }
    default:
      return state
  }
}

const countFromAttackResponseId = (
  response: AttackResponse,
  id: number,
): number => {
  for (let i: number = 0; i < response.length; i++) {
    if (response[i].typeId === id) {
      return response[i].count
    }
  }
  return 0
}

const countFromAttackUnitId = (
  attackUnits: AttackUnit[],
  id: number,
): number => {
  for (let i: number = 0; i < attackUnits.length; i++) {
    if (attackUnits[i].id === id) {
      return attackUnits[i].count
    }
  }
  return 0
}
