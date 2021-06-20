import { TeamModel } from '@components/team/types';
import { MatchModel } from '@components/match/types';
import { Competition } from '@pages/competitions/types';

export interface teamsResponse {
  competition: Competition;
  teams: TeamModel[];
}

export interface matchesResponse {
  competition?: Competition;
  matches: MatchModel[];
}