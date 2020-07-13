import Network from '../network'

const ROUTE = 'Upgrade'

class UpgradeService {
  getUpgrades = async () => {
    return await Network.get(ROUTE)
  }
}

const upgradeService = new UpgradeService()
export default upgradeService
