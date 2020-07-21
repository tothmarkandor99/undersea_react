import Network from '../network'
import {LoginRequest} from '../../model/user/login.request'
import {RegisterRequest} from '../../model/user/register.request'
import {LogoutRequest} from '../../model/user/logout.request'

const LOGIN_ROUTE = 'Auth/login'
const REFRESH_ROUTE = 'Auth/refresh'
const LOGOUT_ROUTE = 'Auth/logout'
const REGISTER_ROUTE = 'Auth/register'

class UserService {
  logIn = async (user: LoginRequest) => {
    return await Network.post(LOGIN_ROUTE, user)
  }

  register = async (user: RegisterRequest) => {
    return await Network.post(REGISTER_ROUTE, user)
  }

  logout = async (user: LogoutRequest) => {
    return await Network.post(LOGOUT_ROUTE, user)
  }

  refresh = async (token: string) => {
    return await Network.post(REFRESH_ROUTE, {token})
  }
}

const userService = new UserService()
export default userService
