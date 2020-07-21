export interface FightResponseItem {
  countryName: string
  units: FightUnitResponse[]
}

export interface FightUnitResponse {
  count: number
  name: string
}

export interface FightResponse extends Array<FightResponseItem> {}
