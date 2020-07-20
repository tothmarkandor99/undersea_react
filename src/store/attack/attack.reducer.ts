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
      }
    case GET_ATTACK_TARGETS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
      }
    case GET_ATTACK_UNITS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
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
              imageUrl: item.imageUrl,
              count: 0,
            },
        ),
      }
    case GET_ATTACK_UNITS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.reason,
      }
    case SELECT_ATTACK_TARGET:
      return {
        ...state,
        attackTargets: state.attackTargets.map(
          item =>
            <AttackTarget>{
              ...item,
              selected:
                item.id === action.target.id ? !item.selected : item.selected,
            },
        ),
      }
    case SET_ATTACK_UNIT_COUNT:
      return {
        ...state,
        attackUnits: state.attackUnits.map(
          item =>
            <AttackUnit>{
              ...item,
              count:
                item.id === action.unit.id &&
                action.count <= item.maxCount &&
                action.count >= 0
                  ? action.count
                  : item.count,
            },
        ),
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
        // TODO: response-t feldolgozni
      }
    case POST_ATTACK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.reason,
      }
    default:
      return state
  }
}
