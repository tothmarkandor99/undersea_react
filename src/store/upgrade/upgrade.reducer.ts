import {UpgradeStore, initialUpgradeStore} from './upgrade.store'
import {
  UpgradeActions,
  GET_UPGRADES_REQUEST,
  GET_UPGRADES_SUCCESS,
  GET_UPGRADES_FAILURE,
  POST_BUY_UPGRADE_REQUEST,
  POST_BUY_UPGRADE_SUCCESS,
  POST_BUY_UPGRADE_FAILURE,
  SELECT_UPGRADE,
} from './upgrade.actions'
import {Upgrade} from '../../model/upgrade/upgrade'
import {upgradeSaga} from './upgrade.saga'
import {Config} from '../../constants/config'

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
        upgrades: [],
        selectedId: undefined,
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
              picture: Config.resourceUrl + item.imageUrl,
              remainingRounds: item.remainingRounds,
            },
        ),
        selectedId: undefined,
      }
    case GET_UPGRADES_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        upgrades: [],
        selectedId: undefined,
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
        selectedId: undefined,
      }
    case POST_BUY_UPGRADE_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
      }
    case SELECT_UPGRADE:
      return {
        ...state,
        selectedId:
          state.selectedId === action.upgrade.id
            ? undefined
            : action.upgrade.id,
      }
    default:
      return state
  }
}
