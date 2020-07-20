import {initialStatsStore, StatsStore} from './stats.store'
import {
  StatsActions,
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
} from './stats.actions'
import {Stats, UnitStat, BuildingStat} from '../../model/stats/stats'

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
        stats: undefined,
      }
    case GET_STATS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        stats: <Stats>{
          unitStats: action.response.statusBar.availableUnits.map(
            item =>
              <UnitStat>{
                ...item,
              },
          ),
          buildingStats: action.response.statusBar.buildings.map(
            item =>
              <BuildingStat>{
                ...item,
                id: item.typeId,
              },
          ),
          round: action.response.statusBar.roundCount,
          scoreboardPosition: action.response.statusBar.scoreboardPosition,
          resourceStats: {...action.response.statusBar.resources},
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
