import Network from '../network'
import {BuildRequest} from '../../model/building/build.request'
const ROUTE = 'Buildings'

class BuildingService {
  getBuildings = async () => {
    return await Network.get(ROUTE)
  }

  postBuild = async (building: BuildRequest) => {
    return await Network.post(ROUTE, building)
  }
}

const buildingService = new BuildingService()
export default buildingService
