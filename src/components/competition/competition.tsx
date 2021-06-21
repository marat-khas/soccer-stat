import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { CompetitionModel } from './types'

import './competition.scss';

const placeholder = './src/assets/img/placeholder.jpg';

export const Competition: FC<CompetitionModel> = ({ id, name, ensignUrl }) => (
  <div className='competition card'>
    <div className='competition__ensign'>
      <div className='competition__img'>
        <img src={ensignUrl || placeholder} alt='flag' />
      </div>
    </div>
    <div className='competition__name card__title'>{name}</div>
    <div className='competition__action'>
      <div className='competition__link'>
        <Link className='btn' to={`${ROUTES.LEAGUE}/${id}/teams`}>Teams</Link>
      </div>
      <div className='competition__link'>
        <Link className='btn' to={`${ROUTES.LEAGUE}/${id}/matches`}>Matches</Link>
      </div>
    </div>
  </div>
)