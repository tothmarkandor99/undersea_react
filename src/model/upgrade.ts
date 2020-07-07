export interface Upgrade {
  upgradeId: number
  name: string
  description: string
  imageUrl: string
  owned: boolean
  remainingRounds: number | null
}
