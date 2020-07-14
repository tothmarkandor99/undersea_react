import Network from '../network'

const ROUTE = 'outgoingAttack'

class FightsService {
  getFights = async () => {
    return await Network.get(ROUTE)
  }
}

const fightsService = new FightsService()
export default fightsService
