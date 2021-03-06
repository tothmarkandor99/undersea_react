import Network from '../network'

const ROUTE = 'MainPage'

class StatsService {
  getStats = async () => {
    return await Network.get(ROUTE)
  }
}

const statsService = new StatsService()
export default statsService
