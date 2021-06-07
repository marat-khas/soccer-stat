import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getLeague } from '@services/league'

import { loading } from '@utilities/loading';
import { LeagueState } from './types'

export const League: FC = () => {
  
  const [ league, setLeague ] = useState<LeagueState>(undefined);

  const { id } = useParams<{ id: string }>();

  if (!league) {
    loading.start();
    getLeague(id)
    .then(data => {
      loading.end();
      setLeague(data);
    })
    .catch(() => {
      loading.end();
    })
  }

  return (
    <div>{
      league?.map(({ crestUrl, id: teamId, name }) => (
        <div className='team-item' key={teamId}>
          <div className='team-item__crest'>
            <img src={crestUrl} alt="crest" />
          </div>
          <div className='team-item__id'>{teamId}</div>
          <div className='team-item__name'>{name}</div>
        </div>
      ))
    }
    </div>
  )
}