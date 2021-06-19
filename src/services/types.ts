import { Team } from '@components/teams/team-item/types';
import { Match } from '@components/matches/match-item/types';
import { Competition } from '@components/competitions/types';

export interface teamsResponse {
  competition: Competition;
  teams: Team[];
}

export interface matchesResponse {
  competition?: Competition;
  matches: Match[];
}