import {initialScoreStore, ScoreStore} from './highscore.store'
import {ScoreboardItem} from '../../model/score/scoreboardItem'
import {
  ScoreActions,
  GET_SCORES_REQUEST,
  GET_SCORES_SUCCESS,
  GET_SCORES_FAILURE,
} from './highscore.actions'
import {Action} from 'redux'

export const scoreReducer = (
  state = initialScoreStore,
  action: ScoreActions,
): ScoreStore => {
  switch (action.type) {
    case GET_SCORES_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      }
    case GET_SCORES_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        scores: action.response.map(
          item => <ScoreboardItem>{place: item.place, name: item.userName},
        ),
      }
    case GET_SCORES_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        scores: [],
      }
  }
}
