export interface HighscoreResponseItem {
  place: number
  userId: string
  userName: string
  score: number
}

export interface HighscoreResponse extends Array<HighscoreResponseItem> {}
