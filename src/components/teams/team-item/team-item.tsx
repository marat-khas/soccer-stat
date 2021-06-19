import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { Team } from './types'

export const TeamItem: FC<Team> = ({ id, name, crestUrl }) => (
  <div className='teams-item'>
  <div className='teams-item__name'>{name}</div>
    <div className='teams-item__crest'>
      <img src={crestUrl} alt='crest' />
    </div>
    <Link to={`${ROUTES.TEAM}/${id}/matches`}>Matches</Link>
  </div>
);