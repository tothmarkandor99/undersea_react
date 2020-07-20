export interface AttackUnitsResponseItem {
  id: number
  name: string
  availableCount: number
  imageUrl: string
}

export interface AttackUnitsResponse extends Array<AttackUnitsResponseItem> {}
