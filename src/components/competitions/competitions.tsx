import { FC, useState } from 'react';
import { AppNav } from '@components/app-nav';
import { CompetitionItem } from '@components/competitions/competitions-item'
import { getCompetitions } from '@services/competitions';
import { loading } from '@utilities/loading';
import { CompetitionsState } from './types'
import './competitions.scss'

export const Competitions: FC = () => {
  
  const [ competitions, setCompetittios] = useState<CompetitionsState>(undefined);

  if (!competitions) {
    loading.start();
    getCompetitions()
    .then(data => {
      loading.end();
      setCompetittios(data);
    })
    .catch(() => {
      loading.end();
    })
  }

  return (
    <div className='page competitions'>
      <AppNav />
      <h1>Competitions</h1>
      <div className='competitions__wrapper'>
        {competitions?.map(({ id, name, area }) => (
          <div className='competitions__item' key={id}>
            <CompetitionItem id={id} name={name} ensignUrl={area.ensignUrl} />
          </div>
        ))}
      </div>
    </div>
  )
}