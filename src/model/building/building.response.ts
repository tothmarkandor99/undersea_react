export interface BuildingResponseItem {
  id: number
  name: string
  description: string
  count: number
  price: number
  imageUrl: string
  remainingRounds: 0
}

export interface BuildingResponse extends Array<BuildingResponseItem> {}
