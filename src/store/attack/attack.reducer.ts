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
import {AttackIdCount} from '../../model/attack/attackIdCount'
import {
  AttackResponseItem,
  AttackResponse,
} from '../../model/attack/attack.response'
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
        selectedUnits: [],
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
      }
    case GET_ATTACK_UNITS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.reason,
        attackUnits: [],
        selectedUnits: [],
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
      let newSelectedUnits: AttackIdCount[] = []
      let containsNew = false
      state.selectedUnits.forEach(item => {
        if (item.id === action.unit.id) {
          containsNew = true
          if (action.count > 0) {
            newSelectedUnits.push({count: action.count, id: item.id})
          }
        } else {
          newSelectedUnits.push(item)
        }
      })
      if (!containsNew) {
        newSelectedUnits.push({id: action.unit.id, count: action.count})
      }
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
        selectedUnits: newSelectedUnits,
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
        selectedUnits: [],
        attackUnits: state.attackUnits.map(
          item =>
            <AttackUnit>{
              ...item,
              maxCount: item.maxCount - countFromId(action.response, item.id),
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

const countFromId = (response: AttackResponse, id: number): number => {
  for (let i: number = 0; i < response.length; i++) {
    if (response[i].typeId === id) {
      return response[i].count
    }
  }
  return 0
}
