export interface Stats {
  countryName: string
  round: number
  scoreboardPosition: number

  unitStats: UnitStat[]
  buildingStats: BuildingStat[]

  resourceStats: ResourceStats
  structureStats: StructureStats
}

export interface UnitStat {
  id: number
  name: string
  availableCount: number
  allCount: number
  imageUrl: string
}

export interface BuildingStat {
  id: number
  name: string
  count: number
  underConstructionCount: number
  imageUrl: string
}

export interface ResourceStats {
  pearlCount: number
  pearlProductionCount: number
  pearlPictureUrl: string
  coralCount: number
  coralProductionCount: number
  coralPictureUrl: string
}

export interface StructureStats {
  flowManager: boolean
  reefCastle: boolean
  mudTractor: boolean
  mudHarvester: boolean
  coralWall: boolean
  sonarCannon: boolean
  underwaterMartialArts: boolean
  alchemy: boolean
}
