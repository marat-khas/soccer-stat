import { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '@components/header';
import { Main } from '@components/main';
import { Footer } from '@components/footer';

import './app.scss';

export const App: FC = () => (
  <StrictMode>
    <div className='app'>
      <BrowserRouter basename={PUBLIC_PATH}>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  </StrictMode>
)