import { COMPETITON_URL, TOKEN } from '@constants/services';
import { MatchesResponse, TeamsResponse } from './types';

export const getLeagueTeams = (id: string): Promise<TeamsResponse> => (
  fetch(`${COMPETITON_URL}/${id}/teams`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .catch(console.error)
)

export const getLeagueMatches = (id: string): Promise<MatchesResponse> => (
  fetch(`${COMPETITON_URL}/${id}/matches`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .catch(console.error)
)