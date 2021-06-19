import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { AppNav } from '@components/app-nav';
import { Competitions } from '@components/competitions';
import { Footer } from '@components/footer';
import { Matches } from '@components/matches';
import { Teams } from '@components/teams';


export const AppRouter: FC = () => (
  <BrowserRouter>
    <div className='app'>
      <header className='app__header'>
        <AppNav />
      </header>
      <main className='app__main'>
        <Switch>
          <Route path={ROUTES.COMPETITIONS} exact component={Competitions} />
          <Route path={`${ROUTES.LEAGUE}/:leagueId/teams`} component={Teams} />
          <Route path={`${ROUTES.LEAGUE}/:leagueId/matches`} component={Matches} />
          <Route path={`${ROUTES.TEAM}/:teamId/matches`} component={Matches} />
        </Switch>
      </main>
      <footer className='app__footer'>
        <Footer />
      </footer>
    </div>
  </BrowserRouter>
)