import { FC} from 'react';

import { FilterProps } from './types';

import './filter.scss';

export const Filter: FC<FilterProps> = ({ id, keyupHandler }) => (
  <div className='filter'>
    <label htmlFor={id} className='filter__label'>Filter</label>
    <input type='text' id={id} className='filter__input inp' onKeyUp={keyupHandler} placeholder='team name' />
  </div>
)