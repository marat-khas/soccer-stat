import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from '@constants/routes'

import { AppNavItem } from '@components/app-nav/app-nav-item';

import './app-nav.scss';

import CompetitionsIco from '@assets/img/home.svg'

export const AppNav: FC = () => {
  const location = useLocation();

  const isHidden = location.pathname === ROUTES.COMPETITIONS;

  const appNavClassNames = classNames('appnav', {
    isHidden
  });
  return (
    <nav className={appNavClassNames}>
      <div className='container'>
        <ul className='appnav__list'>
          <AppNavItem
            to={ROUTES.COMPETITIONS}
            ico={CompetitionsIco}
            label='Main page (competitions)' />
        </ul>
      </div>
    </nav>
  )
}