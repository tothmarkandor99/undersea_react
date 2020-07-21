export interface Fight {
  countryName: string
  units: FightUnit[]
}

export interface FightUnit {
  count: number
  name: string
}
