import {initialArmyStore, ArmyStore} from './army.store'
import {
  ArmyActions,
  GET_ARMY_REQUEST,
  GET_ARMY_SUCCESS,
  GET_ARMY_FAILURE,
  POST_BUY_ARMY_REQUEST,
  POST_BUY_ARMY_SUCCESS,
  POST_BUY_ARMY_FAILURE,
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
