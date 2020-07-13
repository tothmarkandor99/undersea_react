export interface AttackRequestItem {
  id: number
  count: number
}

export interface AttackRequest {
  countryId: number
  attackingUnits: AttackRequestItem[]
}
