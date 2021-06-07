import { FC, StrictMode } from 'react';

import { AppRouter } from '@components/app-router'

export const App: FC = () => (
  <StrictMode>
    <AppRouter />
  </StrictMode>
)