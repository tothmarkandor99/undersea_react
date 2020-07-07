import {ScoreboardItem} from '../../model/scoreboardItem'

export interface ScoreStore {
  isLoading: boolean
  error: string | undefined
  scores: ScoreboardItem[]
}

export const initialScoreStore: ScoreStore = {
  isLoading: false,
  error: undefined,
  scores: [],
}
