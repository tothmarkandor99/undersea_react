import {PurchasableUnit} from '../../model/army/purchasableUnit'

export interface ArmyStore {
  isLoading: boolean
  error: string | undefined
  purchasableUnits: PurchasableUnit[]
}

export const initialArmyStore: ArmyStore = {
  isLoading: false,
  error: undefined,
  purchasableUnits: [],
}
