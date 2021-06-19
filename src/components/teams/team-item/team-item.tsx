import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { Team } from './types'

export const TeamItem: FC<Team> = ({ id, name, crestUrl }) => (
  <div className='teams-item card card--shadow'>
  <div className='teams-item__name card__title'>{name}</div>
    <div className='teams-item__crest'>
      <img src={crestUrl} alt='crest' />
    </div>
    <Link className='btn' to={`${ROUTES.TEAM}/${id}/matches`}>Matches</Link>
  </div>
);