import { TEAM_MATCHES_URL, TOKEN } from '@constants/services';
import { Match } from '@components/matches/match-item/types';
import { Competition } from '@components/competitions/types';

export const getTeamMatches = (id: string): Promise<{competition: Competition, matches: Match[]}> => (
  fetch(TEAM_MATCHES_URL(id), {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .catch(err => {
      console.error(err);
    })
)