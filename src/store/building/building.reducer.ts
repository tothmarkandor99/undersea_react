import {BuildingStore, initialBuildingStore} from './building.store'
import {Building} from '../../model/building/building'
import {
  BuildingActions,
  GET_BUILDINGS_REQUEST,
  GET_BUILDINGS_SUCCESS,
  GET_BUILDINGS_FAILURE,
  SELECT_BUILDING,
  RESET_SELECTION,
  POST_BUILD_REQUEST,
  POST_BUILD_SUCCESS,
  POST_BUILD_FAILURE,
} from './building.actions'

export const buildingReducer = (
  state = initialBuildingStore,
  action: BuildingActions,
): BuildingStore => {
  switch (action.type) {
    case GET_BUILDINGS_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case GET_BUILDINGS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        buildings: action.response.map(
          item =>
            <Building>{
              buildingId: item.id,
              name: item.name,
              description: item.description,
              count: item.count,
              price: item.price,
              pictureUrl: item.picture,
            },
        ),
      }
    case GET_BUILDINGS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        buildings: [],
      }
    case SELECT_BUILDING:
      return {
        ...state,
        selectedBuilding: action.building,
      }
    case RESET_SELECTION:
      return {
        ...state,
        selectedBuilding: undefined,
      }
    case POST_BUILD_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case POST_BUILD_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        selectedBuilding: undefined,
      }
    case POST_BUILD_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        selectedBuilding: undefined,
      }
    default:
      return state
  }
}
