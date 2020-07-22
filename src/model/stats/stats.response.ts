export interface StatsResponse {
  countryName: string
  structures: StructureStatResponse

  statusBar: {
    roundCount: number
    scoreboardPosition: number

    units: UnitStatResponse[]
    buildings: BuildingStatResponse[]
    resources: ResourceStatsResponse
  }
}

export interface UnitStatResponse {
  id: number
  name: string
  availableCount: number
  allCount: number
  imageUrl: string
}

export interface BuildingStatResponse {
  typeId: number
  name: string
  count: number
  underConstructionCount: number
  imageUrl: string
}

export interface StructureStatResponse {
  flowManager: boolean
  reefCastle: boolean
  mudTractor: boolean
  mudHarvester: boolean
  coralWall: boolean
  sonarCannon: boolean
  underwaterMartialArts: boolean
  alchemy: boolean
}

export interface ResourceStatsResponse {
  pearlCount: number
  pearlProductionCount: number
  pearlPictureUrl: string
  coralCount: number
  coralProductionCount: number
  coralPictureUrl: string
}
