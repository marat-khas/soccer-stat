import { FC } from 'react';

import { Route, Switch } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { Competitions } from '@pages/competitions';
import { Matches } from '@pages/matches';
import { Teams } from '@pages/teams';


export const Main: FC = () => (

  <main className='app__main'>
    <Switch>
      <Route path={ROUTES.COMPETITIONS} exact component={Competitions} />
      <Route path={`${ROUTES.LEAGUE}/:leagueId/teams`} component={Teams} />
      <Route path={`${ROUTES.LEAGUE}/:leagueId/matches`} component={Matches} />
      <Route path={`${ROUTES.TEAM}/:teamId/matches`} component={Matches} />
    </Switch>
  </main>
)