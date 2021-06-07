import { COMPETITON_URL, TOKEN } from '@constants/services';
import { Team } from '@components/league/types'

export const getLeague = (id: string): Promise<Team[]> => (
  fetch(`${COMPETITON_URL}/${id}/teams`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .then(data => data.teams)
    .catch(err => {
      console.error(err);
    })
)