import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from '@constants/routes'

import { Calendar } from '@components/calendar';
import { Competitions } from '@components/competitions';
import { League } from '@components/league';
import { Matches } from '@components/matches';
import { Teams } from '@components/teams';
import { Welcome } from '@components/welcome';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTES.WELCOME} exact component={Welcome} />
      <Route path={ROUTES.CALENDAR} component={Calendar} />
      <Route path={ROUTES.COMPETITIONS} component={Competitions} />
      <Route path={`${ROUTES.LEAGUE}/:id`} component={League} />
      <Route path={ROUTES.MATCHES} component={Matches} />
      <Route path={ROUTES.TEAMS} component={Teams} />
    </Switch>
  </BrowserRouter>
)