export interface BuildingResponseItem {
  id: string
  name: string
  description: string
  count: number
  price: number
  picture: string
}

export interface BuildingResponse extends Array<BuildingResponseItem> {}
