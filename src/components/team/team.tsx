import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { TeamModel } from './types'

export const Team: FC<TeamModel> = ({ id, name, crestUrl }) => (
  <div className='teamcard card--shadow'>
  <div className='teams-item__name card__title'>{name}</div>
    <div className='teams-item__crest'>
      <img src={crestUrl} alt='crest' />
    </div>
    <Link className='btn' to={`${ROUTES.TEAM}/${id}/matches`}>Matches</Link>
  </div>
);