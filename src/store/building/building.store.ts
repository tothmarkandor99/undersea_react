import {Building} from '../../model/building'

export interface BuildingStore {
  isLoading: boolean
  error: string | undefined
  buildings: Building[]
  selectedBuilding: Building | undefined
}

export const initialBuildingStore: BuildingStore = {
  isLoading: false,
  error: undefined,
  buildings: [],
  selectedBuilding: undefined,
}
