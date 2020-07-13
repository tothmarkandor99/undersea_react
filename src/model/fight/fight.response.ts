export interface FightResponseItem {
  countryName: string
  laserSharkCount: number
  stormSealCount: number
  combatSeaHorseCount: number
}

export interface FightResponse extends Array<FightResponseItem> {}
