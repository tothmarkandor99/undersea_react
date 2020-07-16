import {User} from '../../model/user/user'

export interface UserStore {
  isLoading: boolean
  error: string | undefined
  user: User | undefined
  accessToken: string | undefined
  refreshToken: string | undefined
}

export const initialUserStore = {
  isLoading: false,
  error: undefined,
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
}
