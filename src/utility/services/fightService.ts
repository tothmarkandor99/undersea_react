import Network from '../network'

const ROUTE = 'outgoingAttack'

class FightsService {
  getFights = async () => {
    console.log('Getting via Axios')
    return await Network.get(ROUTE)
  }
}

const fightsService = new FightsService()
export default fightsService
