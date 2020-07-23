import {AttackTarget} from '../../model/attack/attackTarget'
import {AttackUnit} from '../../model/attack/attackUnit'
import {AttackIdCount} from '../../model/attack/attackIdCount'
import {Search} from '../../model/search/search'
import {Config} from '../../constants/config'

export interface AttackStore {
  isLoading: boolean
  error: string | undefined
  attackTargets: AttackTarget[]
  attackUnits: AttackUnit[]
  selectedUnits: AttackIdCount[] // TODO: remove redundancy
  selectedTargetId: number | undefined
  search: Search
}

export const initialAttackStore: AttackStore = {
  isLoading: false,
  error: undefined,
  attackTargets: [],
  attackUnits: [],
  selectedUnits: [],
  selectedTargetId: undefined,
  search: {
    searchPhrase: '',
    page: 1,
    itemPerPage: Config.defaultSearchItemsPerPage,
  },
}
