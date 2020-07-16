import axios from 'axios'
import {Config} from '../constants/config'
import {useSelector} from 'react-redux'
import {IApplicationState} from '../../store'
import {AsyncStorage} from 'react-native'

/*const {accessToken, refreshToken} = useSelector(
  (state: IApplicationState) => state.app.user,
)*/

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
      reqConfig.headers['Authorization'] = 'Bearer ' + accessToken
    }

    return reqConfig
  },
  error => {
    Promise.reject(error)
  },
)

export default Network
