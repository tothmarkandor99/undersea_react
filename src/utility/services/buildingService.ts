import Network from '../network'
import {BuildRequest} from '../../model/building/build.request'

const ROUTE = 'Buildings'
const BUILD_ROUTE = 'Buildings/purchase'

class BuildingService {
  getBuildings = async () => {
    return await Network.get(ROUTE)
  }

  postBuild = async (building: BuildRequest) => {
    return await Network.post(BUILD_ROUTE, building)
  }
}

const buildingService = new BuildingService()
export default buildingService
