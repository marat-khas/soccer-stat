import { COMPETITON_URL, TOKEN } from '@constants/services';
import { Competition } from '@pages/competitions/types'

const areas = [2072, 2224, 2114, 2088, 2081, 2187];
const codes = ['PL', 'PD', 'SA', 'BL1', 'FL1', 'PPL'];

export const getCompetitions = (): Promise<Competition[]> => (
  fetch(`${COMPETITON_URL}/?areas=${areas.join(',')}`, {
    method: 'GET',
    headers: {
      'X-Auth-Token': TOKEN
    }
  })
    .then(response => response.json())
    .then(data => data.competitions)
    .then(competitions => competitions.filter((league: { code: string }) => codes.includes(league.code)))
    .catch(console.error)
)