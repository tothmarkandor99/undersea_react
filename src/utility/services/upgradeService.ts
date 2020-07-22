import Network from '../network'
import {BuyUpgradeRequest} from '../../model/upgrade/buyUpgrade.request'

const ROUTE = 'Upgrades'
const BUY_ROUTE = 'Upgrades/research'

class UpgradeService {
  getUpgrades = async () => {
    return await Network.get(ROUTE)
  }

  postBuyUpgrade = async (upgrade: BuyUpgradeRequest) => {
    return await Network.post(BUY_ROUTE, upgrade)
  }
}

const upgradeService = new UpgradeService()
export default upgradeService
