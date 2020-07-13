export interface AttackTargetResponseItem {
  id: number
  name: string
  availableCount: string
  picture: string
}

export interface AttackTargetResponse extends Array<AttackTargetResponseItem> {}
