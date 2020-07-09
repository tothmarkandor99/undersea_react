import axios from 'axios'
import {Config} from '../constants/config'

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
    // Access tokent itt lehetne berakni, de az most nincs
    return reqConfig
  },
  error => {
    Promise.reject(error)
  },
)

export default Network
