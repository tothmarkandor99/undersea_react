import {initialStatsStore, StatsStore} from './stats.store'
import {
  StatsActions,
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
} from './stats.actions'
import {Stats, UnitStat, BuildingStat} from '../../model/stats/stats'
import {Config} from '../../constants/config'

export const statsReducer = (
  state = initialStatsStore,
  action: StatsActions,
): StatsStore => {
  switch (action.type) {
    case GET_STATS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case GET_STATS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        stats: <Stats>{
          unitStats: action.response.statusBar.units.map(
            item =>
              <UnitStat>{
                ...item,
                imageUrl: Config.resourceUrl + item.imageUrl,
              },
          ),
          buildingStats: action.response.statusBar.buildings.map(
            item =>
              <BuildingStat>{
                ...item,
                id: item.typeId,
                imageUrl: Config.resourceUrl + item.imageUrl,
              },
          ),
          round: action.response.statusBar.roundCount,
          scoreboardPosition: action.response.statusBar.scoreboardPosition,
          resourceStats: {
            ...action.response.statusBar.resources,
            coralPictureUrl:
              Config.resourceUrl +
              action.response.statusBar.resources.coralPictureUrl,
            pearlPictureUrl:
              Config.resourceUrl +
              action.response.statusBar.resources.pearlPictureUrl,
          },
          countryName: action.response.countryName,
          structureStats: {...action.response.structures},
        },
      }
    case GET_STATS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
      }
    default:
      return state
  }
}
