import {ScoreboardItem} from '../../model/score/scoreboardItem'
import {Search} from '../../model/search/search'
import {Config} from '../../constants/config'

export interface HighscoreStore {
  isLoading: boolean
  error: string | undefined
  scores: ScoreboardItem[]
  search: Search
  endReached: boolean
}

export const initialHighscoreStore: HighscoreStore = {
  isLoading: false,
  error: undefined,
  scores: [],
  search: {
    searchPhrase: '',
    page: 1,
    itemPerPage: Config.defaultSearchItemsPerPage,
  },
  endReached: false,
}
