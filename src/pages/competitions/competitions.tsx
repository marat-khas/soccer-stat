import { FC, useEffect, useState } from 'react';
import { Competition } from '@components/competition'
import { getCompetitions } from '@services/competitions';
import { loading } from '@utilities/loading';
import { CompetitionsState } from './types'
import './competitions.scss'

let cache: CompetitionsState;

export const Competitions: FC = () => {

  const [competitions, setCompetitions] = useState<CompetitionsState>(undefined);

  useEffect(() => {
    if (!cache) {
      loading.start();
      getCompetitions()
        .then(data => {
          loading.end();
          cache = data;
          setCompetitions(data);
        })
        .catch(() => {
          loading.end();
        })
    } else {
      setCompetitions(cache);
    }
  });

  return (
    <div className='page'>
      <div className='container'>
        <div className='page__title'>
          <h1>Competitions</h1>
        </div>
        <div className='competitions__wrapper'>
          {competitions
            ? (
              competitions.map(({ id, name, area }) => (
                <div className='competitions__item' key={id}>
                  <Competition id={id} name={name} ensignUrl={area.ensignUrl} />
                </div>
              ))
            )
            : (<div>Loading ...</div>)}
        </div>
      </div>
    </div>
  )
}