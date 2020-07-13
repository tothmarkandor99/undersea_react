export interface PurchaseUnitRequestItem {
  id: number
  count: number
}

export interface PurchaseUnitRequest extends Array<PurchaseUnitRequestItem> {}
