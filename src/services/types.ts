import { TeamModel } from '@components/team/types';
import { MatchModel } from '@components/match/types';
import { Competition } from '@pages/competitions/types';

export interface TeamsResponse {
  competition: Competition;
  teams: TeamModel[];
}

export interface MatchesResponse {
  competition?: Competition;
  matches: MatchModel[];
}