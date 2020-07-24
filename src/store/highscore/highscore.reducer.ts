import {initialHighscoreStore, HighscoreStore} from './highscore.store'
import {ScoreboardItem} from '../../model/score/scoreboardItem'
import {
  HighscoreActions,
  GET_HIGHSCORES_REQUEST,
  GET_HIGHSCORES_SUCCESS,
  GET_HIGHSCORES_FAILURE,
  SET_HIGHSCORE_SEARCH_PHRASE,
} from './highscore.actions'
import {Search} from '../../model/search/search'
import {Config} from '../../constants/config'

export const highscoreReducer = (
  state = initialHighscoreStore,
  action: HighscoreActions,
): HighscoreStore => {
  switch (action.type) {
    case GET_HIGHSCORES_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
        scores: [],
      }
    case GET_HIGHSCORES_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        scores: action.response.map(
          item =>
            <ScoreboardItem>{
              place: item.place,
              name: item.userName,
              score: item.score,
            },
        ),
      }
    case GET_HIGHSCORES_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        scores: [],
      }
    case SET_HIGHSCORE_SEARCH_PHRASE:
      return {
        ...state,
        search: <Search>{
          searchPhrase: action.searchPhrase,
          itemPerPage: Config.defaultSearchItemsPerPage,
          page: 1,
        },
      }
    default:
      return state
  }
}
