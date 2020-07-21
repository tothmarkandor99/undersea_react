export interface AttackRequestItem {
  id: number
  sendCount: number
}

export interface AttackRequest {
  defenderUserId: number
  attackingUnits: AttackRequestItem[]
}
