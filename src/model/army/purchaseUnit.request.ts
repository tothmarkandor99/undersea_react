export interface PurchaseUnitRequestItem {
  typeId: number
  count: number
}

export interface PurchaseUnitRequest extends Array<PurchaseUnitRequestItem> {}
