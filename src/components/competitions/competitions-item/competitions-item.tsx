import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { CompetitionItemProps } from './types'

const placeholder = './src/assets/img/placeholder.jpg';

export const CompetitionItem: FC<CompetitionItemProps> = ({ id, name, ensignUrl }) => (
  <div className='competitions-item card'>
    <div className='competitions-item__ensign'>
      <img src={ensignUrl || placeholder} alt='flag' />
    </div>
    <div className='competitions-item__name card__title'>{name}</div>
    <div className='competitions-item__action'>
      <div className='competitions-item__link'>
        <Link className='btn' to={`${ROUTES.LEAGUE}/${id}/teams`}>Teams</Link>
      </div>
      <div className='competitions-item__link'>
        <Link className='btn' to={`${ROUTES.LEAGUE}/${id}/matches`}>Matches</Link>
      </div>
    </div>
  </div>
)