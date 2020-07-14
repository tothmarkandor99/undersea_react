import Network from '../network'
import {PurchasableUnitResponse} from '../../model/army/purchasableUnit.response'
import {PurchaseUnitRequest} from '../../model/army/purchaseUnit.request'

const ROUTE = ''

class ArmyService {
  getArmy = async () => {
    return await Network.get(ROUTE)
  }

  postBuyArmy = async (army: PurchaseUnitRequest) => {
    return await Network.post(ROUTE, army)
  }
}

const armyService = new ArmyService()
export default armyService
