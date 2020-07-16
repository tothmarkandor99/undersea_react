export interface UpgradeResponseItem {
  id: number
  name: string
  description: string
  imageUrl: string
  isPurchased: boolean
  remainingRounds: number
}

export interface UpgradeResponse extends Array<UpgradeResponseItem> {}
