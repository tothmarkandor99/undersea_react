import {initialStatsStore, StatsStore} from './stats.store'
import {
  StatsActions,
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
} from './stats.actions'
import {Stats} from '../../model/stats/stats'

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
          /* TODO: API alapján */
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
