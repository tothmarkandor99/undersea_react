import axios, {AxiosResponse} from 'axios'
import {Config} from '../constants/config'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {AsyncStorage} from 'react-native'
import jwt_decode from 'jwt-decode'
import {Token} from '../model/token/token'
import {Strings} from '../constants/strings'
import {RefreshTokenRequest} from '../model/token/refreshToken.request'
import {RefreshTokenResponse} from '../model/token/refreshToken.response'

const REFRESH_PATH = 'Auth/renew'

const Network = axios.create({
  baseURL: Config.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
})

Network.interceptors.request.use(
  async reqConfig => {
    let accessToken = await AsyncStorage.getItem('access_token')
    if (accessToken) {
      if (tokenExpired(accessToken)) {
        await renewToken()
      }
      reqConfig.headers['Authorization'] = 'Bearer ' + accessToken
    }

    return reqConfig
  },
  error => {
    Promise.reject(error)
  },
)

Network.interceptors.request.use(request => {
  if (Config.loggingRequests) {
    console.log(request.baseURL + '/' + request.url)
    console.log(JSON.stringify(request.data))
  }
  return request
})

Network.interceptors.response.use(response => {
  if (Config.loggingResponses) {
    console.log(response.status, response.statusText)
    console.log(response.data)
  }
  return response
})

const tokenExpired = (
  tokenString: string,
  thresholdMilliseconds: number = 15000,
): boolean => {
  let token = jwt_decode(tokenString) as Token
  let timeNow = new Date().getTime()
  let timeToken = token.exp * 1000
  return timeToken - timeNow < thresholdMilliseconds
}

const renewToken = async () => {
  let refreshToken = await AsyncStorage.getItem('refresh_token')
  if (refreshToken) {
    const res: AxiosResponse<RefreshTokenResponse> = await axios.post(
      `${Config.baseUrl}/${REFRESH_PATH}`,
      {
        refreshToken,
      } as RefreshTokenRequest,
    )
    let newTokens: RefreshTokenResponse = res.data
    await AsyncStorage.setItem('refresh_token', newTokens.refreshToken)
    await AsyncStorage.setItem('access_token', newTokens.accessToken)
    console.info('Tokens refreshed')
  }
}

export default Network
