import {Upgrade} from '../../model/upgrade/upgrade'

export interface UpgradeStore {
  isLoading: boolean
  error: string | undefined
  upgrades: Upgrade[]
}

export const initialUpgradeStore: UpgradeStore = {
  isLoading: false,
  error: undefined,
  upgrades: [],
}
