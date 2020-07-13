import {Fight} from '../../model/fight/fight'

export interface FightStore {
  isLoading: boolean
  error: string | undefined
  fights: Fight[]
}

export const initialFightStore: FightStore = {
  isLoading: false,
  error: undefined,
  fights: [],
}
