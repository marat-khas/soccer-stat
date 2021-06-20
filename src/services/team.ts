import { TEAM_MATCHES_URL, TOKEN } from '@constants/services';

import { matchesResponse } from './types';

export const getTeamMatches = (id: string): Promise<matchesResponse> => (
  fetch(TEAM_MATCHES_URL(id), {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .catch(console.error)
)