import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames'

import './app-nav-item.scss'

export interface AppNavItemProps {
  to: string;
  ico?: any;
  label: string
}

export const AppNavItem: FC<AppNavItemProps> = ({ to, ico: Ico, label }) => {
  const history = useHistory();
  const className = classNames('appnav__item', 'appnav-item', {
    isActive: history.location.pathname === to
  });
  return (
    <li className={className}>
      <Link className='appnav-item__link' to={to}>
        {Ico && (
          <span className='appnav-item__ico'>
            <Ico />
          </span>
        )}
        <span className='appnav-item__label'>{label}</span>
      </Link>
    </li>
  )
}