export interface AttackResponseItem {
  typeId: number
  count: number
}

export interface AttackResponse extends Array<AttackResponseItem> {}
