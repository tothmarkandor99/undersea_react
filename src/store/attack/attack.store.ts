import {AttackTarget} from '../../model/attack/attackTarget'
import {AttackUnit} from '../../model/attack/attackUnit'
import {Search} from '../../model/search/search'
import {Config} from '../../constants/config'

export interface AttackStore {
  isLoading: boolean
  error: string | undefined
  attackTargets: AttackTarget[]
  attackUnits: AttackUnit[]
  selectedTargetId: number | undefined
  selectedUnitsCount: number
  search: Search
  endReached: boolean
}

export const initialAttackStore: AttackStore = {
  isLoading: false,
  error: undefined,
  attackTargets: [],
  attackUnits: [],
  selectedTargetId: undefined,
  selectedUnitsCount: 0,
  search: {
    searchPhrase: '',
    page: 1,
    itemPerPage: Config.defaultSearchItemsPerPage,
  },
  endReached: false,
}
