import {Building} from '../../model/building/building'

export interface BuildingStore {
  isLoading: boolean
  error: string | undefined
  buildings: Building[]
  selectedBuildingId: number | undefined
}

export const initialBuildingStore: BuildingStore = {
  isLoading: false,
  error: undefined,
  buildings: [],
  selectedBuildingId: undefined,
}
