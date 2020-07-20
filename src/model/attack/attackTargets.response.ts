export interface AttackTargetsResponseItem {
  id: number
  userName: string
  place: number
  score: number
}

export interface AttackTargetsResponse
  extends Array<AttackTargetsResponseItem> {}
