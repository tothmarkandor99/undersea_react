import Network from '../network'
import {NewRoundRequest} from '../../model/newRound.request'

const ROUTE = 'MainPage/newround'

class NewRoundService {
  newRound = async (request: NewRoundRequest) => {
    return await Network.post(ROUTE, request)
  }
}

const newRoundService = new NewRoundService()
export default newRoundService
