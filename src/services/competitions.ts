import { COMPETITON_URL, TOKEN } from '@constants/services';
import { League } from '@components/competitions/types'


export const getCompetitions = (): Promise<League[]> => (
  fetch(`${COMPETITON_URL}/?areas=2072`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .then(data => data.competitions)
    .catch(err => {
      console.error(err);
    })
)