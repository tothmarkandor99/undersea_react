import {ScoreboardItem} from '../../model/score/scoreboardItem'

export interface HighscoreStore {
  isLoading: boolean
  error: string | undefined
  scores: ScoreboardItem[]
}

export const initialHighscoreStore: HighscoreStore = {
  isLoading: false,
  error: undefined,
  scores: [],
}
