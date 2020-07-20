import Network from '../network'

const ROUTE = 'Attacks/getoutgoing'

class FightsService {
  getFights = async () => {
    return await Network.get(ROUTE)
  }
}

const fightsService = new FightsService()
export default fightsService
