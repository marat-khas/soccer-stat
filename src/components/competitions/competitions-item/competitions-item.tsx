import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CompetitionItemProps } from './types'

const placeholder = './src/assets/img/placeholder.jpg';

export const CompetitionItem: FC<CompetitionItemProps> = ({ id, name, ensignUrl }) => (
  <div className='competitions-item'>
    <div className="competitions-item__ensign">
      <img src={ensignUrl || placeholder} alt="flag" />
    </div>
    <div className="competitions-item__title">{name}</div>
    <Link to={`/league/${id}`}>Info</Link>
  </div>
)