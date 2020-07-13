export interface PurchasableUnitResponseItem {
  id: number
  name: string
  count: number
  attackScore: number
  defenseScore: number
  pearlCostPerTurn: number
  coralCostPerTurn: number
  price: number
  picture: string
}

export interface PurchasableUnitResponse
  extends Array<PurchasableUnitResponseItem> {}
