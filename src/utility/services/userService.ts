import Network from '../network'
import {LoginRequest} from '../../model/user/login.request'
import {RegisterRequest} from '../../model/user/register.request'
import {LogoutRequest} from '../../model/user/logout.request'

const ROUTE = ''

class UserService {
  logIn = async (user: LoginRequest) => {
    return await Network.post(ROUTE, user)
  }

  register = async (user: RegisterRequest) => {
    return await Network.post(ROUTE, user)
  }

  logout = async (user: LogoutRequest) => {
    return await Network.post(ROUTE, user)
  }

  refresh = async (token: string) => {
    return await Network.post(ROUTE, {token}) // TODO: API-hoz igazítani
  }
}

const userService = new UserService()
export default userService
