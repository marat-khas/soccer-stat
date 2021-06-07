import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames'

export interface AppNavItemProps {
  to: string
}

export const AppNavItem: FC<AppNavItemProps> = ({ to, children }) => {
  const history = useHistory();
  const className = classNames('appnav__item', {
    isActive: history.location.pathname === to
  })
  return (
    <li className={className}>
      <Link to={to}>{children}</Link>
    </li>
  )
}