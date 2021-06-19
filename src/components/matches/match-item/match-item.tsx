import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';

import { Match } from './types';

const nullToDash = (val: number | null): number | string => val === null ? '-' : val;

export const MatchItem: FC<Match> = ({ utcDate, competition, homeTeam, awayTeam, score }) => (
  <div className='match-item'>
    {competition && (
      <div className='match-item__competition'>
        <Link to={`${ROUTES.LEAGUE}/${competition.id}/teams`}>{`${competition.name}`}</Link>
      </div>
    )
    }
    <div className='match-item__date'>{`${utcDate}`}</div>
    <div className='match-item__teams'>{`${homeTeam.name} vs ${awayTeam.name}`}</div>
    <div className='match-item__scores'>{`${nullToDash(score.fullTime.homeTeam)} : ${nullToDash(score.fullTime.awayTeam)}`}</div>
    <div className='match-item__scores match-item__scores--halftime'>{`(${nullToDash(score.halfTime.homeTeam)} : ${nullToDash(score.halfTime.awayTeam)})`}</div>
  </div>
)