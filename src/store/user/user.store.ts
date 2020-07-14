import {User} from '../../model/user/user'

export interface UserStore {
  isLoading: boolean
  error: string | undefined
  user: User | undefined
}

export const initialUserStore = {
  isLoading: false,
  error: undefined,
  user: undefined,
}
