import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { CompetitionItemProps } from './types'

const placeholder = './src/assets/img/placeholder.jpg';

export const CompetitionItem: FC<CompetitionItemProps> = ({ id, name, ensignUrl }) => (
  <div className='competitions-item'>
    <div className='competitions-item__ensign'>
      <img src={ensignUrl || placeholder} alt='flag' />
    </div>
    <div className='competitions-item__title'>{name}</div>
    <Link to={`${ROUTES.LEAGUE}/${id}/teams`}>Teams</Link>
    <Link to={`${ROUTES.LEAGUE}/${id}/matches`}>Matches</Link>
  </div>
)