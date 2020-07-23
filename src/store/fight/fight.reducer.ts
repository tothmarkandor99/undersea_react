import {FightStore, initialFightStore} from './fight.store'
import {
  FightActions,
  GET_FIGHTS_REQUEST,
  GET_FIGHTS_SUCCESS,
  GET_FIGHTS_FAILURE,
} from './fight.actions'
import {Fight, FightUnit} from '../../model/fight/fight'

export const fightReducer = (
  state = initialFightStore,
  action: FightActions,
): FightStore => {
  switch (action.type) {
    case GET_FIGHTS_REQUEST:
      return {
        ...state,
        error: undefined,
        isLoading: true,
        fights: [],
      }
    case GET_FIGHTS_SUCCESS:
      return {
        ...state,
        error: undefined,
        isLoading: false,
        fights: action.response.map(
          item =>
            <Fight>{
              countryName: item.countryName,
              units: item.units.map(
                item2 =>
                  <FightUnit>{
                    ...item2,
                  },
              ),
            },
        ),
      }
    case GET_FIGHTS_FAILURE:
      return {
        ...state,
        error: action.reason,
        isLoading: false,
        fights: [],
      }
    default:
      return state
  }
}
