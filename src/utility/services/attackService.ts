import {SearchRequest} from '../../model/search.request'
import Network from '../network'
import {AttackRequest} from '../../model/attack/attack.request'

const TARGETS_ROUTE = 'Attacks/searchtargets'
const UNITS_ROUTE = 'Attacks/getunits'
const ATTACK_ROUTE = 'Attacks/send'

class AttackService {
  getAttackTargets = async (search: SearchRequest) => {
    return await Network.get(TARGETS_ROUTE, {params: search})
  }

  getAttackUnits = async () => {
    return await Network.get(UNITS_ROUTE)
  }

  postAttack = async (attack: AttackRequest) => {
    return await Network.post(ATTACK_ROUTE, attack)
  }
}

const attackService = new AttackService()
export default attackService
