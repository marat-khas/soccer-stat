export interface Team {
  id: string,
  name: string,
  crestUrl: string
}

export type LeagueState = Team[] | undefined