export interface UserStore {
  isLoading: boolean
  error: string | undefined
  loggedIn: boolean
}

export const initialUserStore = {
  isLoading: false,
  error: undefined,
  loggedIn: false,
}
