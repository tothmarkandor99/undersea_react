import {UpgradeStore, initialUpgradeStore} from './upgrade.store'
import {
  UpgradeActions,
  GET_UPGRADES_REQUEST,
  GET_UPGRADES_SUCCESS,
  GET_UPGRADES_FAILURE,
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
              details: item.details,
              isPurchased: item.isPurchased,
              picture: item.picture,
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
    default:
      return state
  }
}
