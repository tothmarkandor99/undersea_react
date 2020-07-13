export interface UpgradeResponseItem {
  id: number
  name: string
  details: string
  picture: string
  isPurchased: boolean
  remainingRounds: number
}

export interface UpgradeResponse extends Array<UpgradeResponseItem> {}
