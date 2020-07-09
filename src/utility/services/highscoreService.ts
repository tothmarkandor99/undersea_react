import Network from '../network'
import {SearchRequest} from '../../model/search.request'

const SEARCH_PATH = 'highscores'

class HighscoreService {
  searchHighscores = async (search: SearchRequest) => {
    return await Network.get(SEARCH_PATH)
  }
}

const highscoreService = new HighscoreService()
export default highscoreService
