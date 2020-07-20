import {initialArmyStore, ArmyStore} from './army.store'
import {
  ArmyActions,
  GET_ARMY_REQUEST,
  GET_ARMY_SUCCESS,
  GET_ARMY_FAILURE,
  POST_BUY_ARMY_REQUEST,
  POST_BUY_ARMY_SUCCESS,
  POST_BUY_ARMY_FAILURE,
  INCREMENT_ARMY_COUNT,
  DECREMENT_ARMY_COUNT,
} from './army.actions'
import {PurchasableUnit} from '../../model/army/purchasableUnit'
import {PurchaseUnitResponse} from '../../model/army/purchaseUnit.response'

export const armyReducer = (
  state = initialArmyStore,
  action: ArmyActions,
): ArmyStore => {
  switch (action.type) {
    case GET_ARMY_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case GET_ARMY_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        purchasableUnits: action.response.map(
          item =>
            <PurchasableUnit>{
              id: item.id,
              attackScore: item.attackScore,
              coralCostPerTurn: item.coralCostPerTurn,
              count: item.count,
              defenseScore: item.defenseScore,
              name: item.name,
              pearlCostPerTurn: item.pearlCostPerTurn,
              picture: item.picture,
              price: item.price,
              viewCount: 0,
            },
        ),
      }
    case GET_ARMY_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        purchasableUnits: [],
      }
    case POST_BUY_ARMY_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case POST_BUY_ARMY_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        purchasableUnits: state.purchasableUnits.map(
          item =>
            <PurchasableUnit>{
              ...item,
              count: item.count + countFromId(action.response, item.id),
            },
        ),
      }
    case POST_BUY_ARMY_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
      }
    case INCREMENT_ARMY_COUNT:
      let incrementedUnits = state.purchasableUnits
      for (let i: number = 0; i < incrementedUnits.length; i++) {
        if (incrementedUnits[i].id === action.unit.id) {
          incrementedUnits[i].viewCount += 1
        }
      }
      return {
        ...state,
        purchasableUnits: incrementedUnits,
      }
    case DECREMENT_ARMY_COUNT:
      let decrementedUnits = state.purchasableUnits
      for (let i: number = 0; i < decrementedUnits.length; i++) {
        if (
          decrementedUnits[i].id === action.unit.id &&
          decrementedUnits[i].viewCount > 0
        ) {
          decrementedUnits[i].viewCount -= 1
        }
      }
      return {
        ...state,
        purchasableUnits: decrementedUnits,
      }
    default:
      return state
  }
}

const countFromId = (response: PurchaseUnitResponse, id: number): number => {
  for (let i: number = 0; i < response.length; i++) {
    if (response[i].id === id) {
      return response[i].count
    }
  }
  return 0
}
