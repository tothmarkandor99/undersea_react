import {AttackTarget} from '../../model/attack/attackTarget'
import {AttackUnit} from '../../model/attack/attackUnit'

export interface AttackStore {
  isLoading: boolean
  error: string | undefined
  attackTargets: AttackTarget[]
  attackUnits: AttackUnit[]
  selectedTargetCount: number
  selectedUnitCount: number
}

export const initialAttackStore: AttackStore = {
  isLoading: false,
  error: undefined,
  attackTargets: [],
  attackUnits: [],
  selectedTargetCount: 0,
  selectedUnitCount: 0,
}
