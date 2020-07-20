import Network from '../network'
import {SearchRequest} from '../../model/search.request'

const SEARCH_ROUTE = 'highscores'

class HighscoreService {
  searchHighscores = async (search: SearchRequest) => {
    return await Network.get(SEARCH_ROUTE, {params: search})
  }
}

const highscoreService = new HighscoreService()
export default highscoreService
