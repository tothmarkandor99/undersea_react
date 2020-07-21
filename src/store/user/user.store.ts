import {User} from '../../model/user/user'

export interface UserStore {
  isLoading: boolean
  error: string | undefined
  loggedIn: boolean
  accessToken: string | undefined
  refreshToken: string | undefined
}

export const initialUserStore = {
  isLoading: false,
  error: undefined,
  loggedIn: false,
  accessToken: undefined,
  refreshToken: undefined,
}
