export interface PurchaseUnitResponseItem {
  id: number
  count: number
}

export interface PurchaseUnitResponse extends Array<PurchaseUnitResponseItem> {}
