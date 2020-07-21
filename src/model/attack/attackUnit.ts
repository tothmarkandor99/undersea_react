export interface AttackUnit {
  id: number
  name: string
  maxCount: number
  count: number // TODO: remove redundancy
  imageUrl: string
}
