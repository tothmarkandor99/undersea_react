import {PurchasableUnit} from '../model/army/purchasableUnit'

export interface PurchasableUnitStore {
  isLoading: boolean
  error: string | undefined
  purchasableUnits: PurchasableUnit[]
  selected: PurchasableUnit[]
}

export const initialPurchasableUnitStore: PurchasableUnitStore = {
  isLoading: false,
  error: undefined,
  purchasableUnits: [],
  selected: [],
}
