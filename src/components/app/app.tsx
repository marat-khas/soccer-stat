import { FC, StrictMode } from 'react';

import { AppRouter } from '@components/app-router';

import './app.scss';

export const App: FC = () => (
  <StrictMode>
    <AppRouter />
  </StrictMode>
)