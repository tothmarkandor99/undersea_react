import {initialHighscoreStore, HighscoreStore} from './highscore.store'
import {ScoreboardItem} from '../../model/score/scoreboardItem'
import {
  HighscoreActions,
  GET_HIGHSCORES_REQUEST,
  GET_HIGHSCORES_SUCCESS,
  GET_HIGHSCORES_FAILURE,
} from './highscore.actions'

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
      }
    case GET_HIGHSCORES_SUCCESS:
      console.log('Action response type:', typeof action.response)
      return {
        ...state,
        error: undefined,
        isLoading: false,
        scores: action.response.map(
          item =>
            <ScoreboardItem>{
              place: item.place,
              name: item.userName,
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
    default:
      return state
  }
}
