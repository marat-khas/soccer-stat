import { FC } from 'react';

import { AppNavItem } from '@components/app-nav/app-nav-item';

import { ROUTES } from '@constants/routes';

import './app-nav.scss';

export const AppNav: FC = () => (
  <nav className='appnav'>
    <ul className='appnav__list'>
      <AppNavItem to={ROUTES.WELCOME}>Main</AppNavItem>
      <AppNavItem to={ROUTES.CALENDAR}>Calendar</AppNavItem>
      <AppNavItem to={ROUTES.COMPETITIONS}>Competitions</AppNavItem>
      <AppNavItem to={ROUTES.MATCHES}>Matches</AppNavItem>
      <AppNavItem to={ROUTES.TEAMS}>Teams</AppNavItem>
    </ul>
  </nav>
)