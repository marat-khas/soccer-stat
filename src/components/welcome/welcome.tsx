import { FC } from 'react';
import { AppNav } from '@components/app-nav'

export const Welcome: FC = () => (
  <div className='page'>
    <AppNav />
    <h1>Welcome</h1>
  </div>
)