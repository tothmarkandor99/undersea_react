import {UpgradeStore, initialUpgradeStore} from './upgrade.store'
import {
  UpgradeActions,
  GET_UPGRADES_REQUEST,
  GET_UPGRADES_SUCCESS,
  GET_UPGRADES_FAILURE,
  POST_BUY_UPGRADE_REQUEST,
  POST_BUY_UPGRADE_SUCCESS,
  POST_BUY_UPGRADE_FAILURE,
} from './upgrade.actions'
import {Upgrade} from '../../model/upgrade/upgrade'

export const upgradeReducer = (
  state = initialUpgradeStore,
  action: UpgradeActions,
): UpgradeStore => {
  switch (action.type) {
    case GET_UPGRADES_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case GET_UPGRADES_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        upgrades: action.response.map(
          item =>
            <Upgrade>{
              id: item.id,
              name: item.name,
              details: item.description,
              isPurchased: item.isPurchased,
              picture: item.imageUrl,
              remainingRounds: item.remainingRounds,
            },
        ),
      }
    case GET_UPGRADES_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        upgrades: [],
      }
    case POST_BUY_UPGRADE_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: false,
      }
    case POST_BUY_UPGRADE_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        upgrades: state.upgrades.map(
          item =>
            <Upgrade>{
              ...item,
              isPurchased: item.isPurchased || action.response.id == item.id,
              // TODO: ez valószínűleg nem lesz egyből purchased, backenden vissza kéne adni a remainingRounds-t
            },
        ),
      }
    case POST_BUY_UPGRADE_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
      }
    default:
      return state
  }
}
