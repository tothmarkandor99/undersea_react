export interface PurchaseUnitResponseItem {
  typeId: number
  count: number
}

export interface PurchaseUnitResponse extends Array<PurchaseUnitResponseItem> {}
