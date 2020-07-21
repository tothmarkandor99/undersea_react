import axios from 'axios'
import {Config} from '../constants/config'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {AsyncStorage} from 'react-native'
import JWT from 'expo-jwt'

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
      // console.log(JWT.decode(accessToken, 'SOME_RANDOM_KEY_DO_NOT_SHARE'))
      reqConfig.headers['Authorization'] = 'Bearer ' + accessToken
    }

    return reqConfig
  },
  error => {
    Promise.reject(error)
  },
)

Network.interceptors.request.use(request => {
  console.log(request.baseURL + '/' + request.url)
  console.log(JSON.stringify(request.data))
  return request
})

Network.interceptors.response.use(response => {
  console.log(response.status, response.statusText)
  console.log(response.data)
  return response
})

export default Network
