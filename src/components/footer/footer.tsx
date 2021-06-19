import { FC } from 'react';

import { GITHUB_HREF } from '@constants/links';

import './footer.scss';

export const Footer: FC = () => (
  <div className='footer'>
    <div className='container'>
      <div className='footer__info'>
        Test task for SimbirSoft by <a href={GITHUB_HREF} className='footer__link' target='_blank' rel='noreferrer'>Marat Khas</a>
      </div>
    </div>
  </div>
)