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
import {select} from 'redux-saga/effects'
import {Config} from '../../constants/config'

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
        buildings: [],
        selectedBuildingId: undefined,
      }
    case GET_BUILDINGS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        buildings: action.response.map(
          item =>
            <Building>{
              id: item.id,
              name: item.name,
              description: item.description,
              count: item.count,
              price: item.price,
              pictureUrl: Config.resourceUrl + item.imageUrl,
              remainingRounds: item.remainingRounds,
            },
        ),
        selectedBuildingId: undefined,
      }
    case GET_BUILDINGS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        buildings: [],
        selectedBuildingId: undefined,
      }
    case SELECT_BUILDING:
      return {
        ...state,
        selectedBuildingId:
          action.building?.id === state.selectedBuildingId
            ? undefined
            : action.building?.id,
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
        selectedBuildingId: undefined,
      }
    case POST_BUILD_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        selectedBuildingId: undefined,
      }
    default:
      return state
  }
}
