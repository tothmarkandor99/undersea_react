import Network from '../network'

const ROUTE = 'OutgoingAttack'

class FightsService {
  getFights = async () => {
    return await Network.get(ROUTE)
  }
}

const fightsService = new FightsService()
export default fightsService
