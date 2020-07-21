import {AttackTarget} from '../../model/attack/attackTarget'
import {AttackUnit} from '../../model/attack/attackUnit'
import {AttackIdCount} from '../../model/attack/attackIdCount'

export interface AttackStore {
  isLoading: boolean
  error: string | undefined
  attackTargets: AttackTarget[]
  attackUnits: AttackUnit[]
  selectedUnits: AttackIdCount[] // TODO: remove redundancy
  selectedTargetId: number | undefined
}

export const initialAttackStore: AttackStore = {
  isLoading: false,
  error: undefined,
  attackTargets: [],
  attackUnits: [],
  selectedUnits: [],
  selectedTargetId: undefined,
}
