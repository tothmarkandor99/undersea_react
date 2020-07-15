import {Stats} from '../../model/stats/stats'

export interface StatsStore {
  isLoading: boolean
  error: string | undefined
  stats: Stats | undefined
}

export const initialStatsStore: StatsStore = {
  isLoading: false,
  error: undefined,
  stats: undefined,
}
