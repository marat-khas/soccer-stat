import { FC } from 'react';

import { AppNavItem } from '@components/app-nav/app-nav-item';

import { ROUTES } from '@constants/routes';

import './app-nav.scss';

export const AppNav: FC = () => (
  <nav className='appnav'>
    <div className='container'>
      <ul className='appnav__list'>
        <AppNavItem to={ROUTES.COMPETITIONS}>Main page (competitions)</AppNavItem>
      </ul>
    </div>
  </nav>
)