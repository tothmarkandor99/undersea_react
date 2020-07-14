import Network from '../network'
import {PurchasableUnitResponse} from '../../model/army/purchasableUnit.response'

const ROUTE = ''

class ArmyService {
  getArmy = async () => {
    return await Network.get(ROUTE)
  }
}

const armyService = new ArmyService()
export default armyService
