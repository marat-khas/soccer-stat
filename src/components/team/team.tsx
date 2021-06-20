import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { TeamModel } from './types'

import './team.scss'

export const Team: FC<TeamModel> = ({ id, name, crestUrl }) => (
  <div className='team card card--shadow'>
    <div className='team__name card__title'>{name}</div>
    <div className='team__crest'>
      <img src={crestUrl} alt='crest' />
    </div>
    <div className='team__action'>
      <Link className='btn' to={`${ROUTES.TEAM}/${id}/matches`}>Matches</Link>
    </div>
  </div>
);