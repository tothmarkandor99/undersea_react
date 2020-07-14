import {initialArmyStore, ArmyStore} from './army.store'
import {
  ArmyActions,
  GET_ARMY_REQUEST,
  GET_ARMY_SUCCESS,
  GET_ARMY_FAILURE,
} from './army.actions'
import {PurchasableUnit} from '../../model/army/purchasableUnit'

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
    default:
      return state
  }
}
