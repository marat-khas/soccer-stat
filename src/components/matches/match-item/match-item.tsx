import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import classNames from 'classnames';

import { Match } from './types';

const nullToDash = (val: number | null): number | string => val === null ? '-' : val;

export const MatchItem: FC<Match> = ({ utcDate, competition, homeTeam, awayTeam, score }) => {
  const homeTeamClassName = classNames({
    isWinner: score.winner === 'HOME_TEAM',
    isDraw: score.winner === 'DRAW'
  })
  const awayTeamClassName = classNames({
    isWinner: score.winner === 'AWAY_TEAM',
    isDraw: score.winner === 'DRAW'
  })
  return (
    <tr className='match-item'>
      <td className='match-item__date'>{utcDate}</td>
      {competition && (
        <td className='match-item__competition'>
          <Link className='link' to={`${ROUTES.LEAGUE}/${competition.id}/teams`}>{competition.name}</Link>
        </td>
      )
      }
      <td className='match-item__teams'>
        <span className={homeTeamClassName}>{homeTeam.name}</span>
        <span className='match-item__vs'> vs </span>
        <span className={awayTeamClassName}>{awayTeam.name}</span>
      </td>
      <td className='match-item__scores'>{`${nullToDash(score.fullTime.homeTeam)} : ${nullToDash(score.fullTime.awayTeam)}`}</td>
      <td className='match-item__scores match-item__scores--halftime'>{`(${nullToDash(score.halfTime.homeTeam)} : ${nullToDash(score.halfTime.awayTeam)})`}</td>
    </tr>
  )
}