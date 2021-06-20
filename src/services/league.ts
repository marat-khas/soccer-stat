import { COMPETITON_URL, TOKEN } from '@constants/services';
import { matchesResponse, teamsResponse } from './types';

export const getLeagueTeams = (id: string): Promise<teamsResponse> => (
  fetch(`${COMPETITON_URL}/${id}/teams`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .catch(console.error)
)

export const getLeagueMatches = (id: string): Promise<matchesResponse> => (
  fetch(`${COMPETITON_URL}/${id}/matches`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .catch(console.error)
)