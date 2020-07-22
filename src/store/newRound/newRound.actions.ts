import {NewRoundRequest} from '../../model/newRound.request'

export const NEW_ROUND_REQUEST = 'NEW_ROUND_REQUEST'
export const NEW_ROUND_SUCCESS = 'NEW_ROUND_SUCCESS'

export interface NewRoundRequestAction {
  type: typeof NEW_ROUND_REQUEST
  request: NewRoundRequest
}

export interface NewRoundSuccessAction {
  type: typeof NEW_ROUND_SUCCESS
}

export type NewRoundActions = NewRoundRequestAction | NewRoundSuccessAction

export const newRound = (count: number): NewRoundRequestAction => ({
  type: NEW_ROUND_REQUEST,
  request: {nubmer: count} as NewRoundRequest,
})

export const newRoundSuccessActionCreator = (): NewRoundSuccessAction => ({
  type: NEW_ROUND_SUCCESS,
})
