import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import classNames from 'classnames';

import { MatchModel } from './types';

import './match.scss';

const nullToDash = (val: number | null): number | string => val === null ? '-' : val;

export const Match: FC<MatchModel> = ({ utcDate, competition, homeTeam, awayTeam, score }) => {
  const homeTeamClassName = classNames({
    isWinner: score.winner === 'HOME_TEAM',
    isDraw: score.winner === 'DRAW'
  })
  const awayTeamClassName = classNames({
    isWinner: score.winner === 'AWAY_TEAM',
    isDraw: score.winner === 'DRAW'
  })
  return (
    <tr className='match'>
      <td className='match__date'>{utcDate}</td>
      {competition && (
        <td className='match__competition'>
          <Link className='link' to={`${ROUTES.LEAGUE}/${competition.id}/teams`}>{competition.name}</Link>
        </td>
      )
      }
      <td className='match__teams'>
        <span className={homeTeamClassName}>{homeTeam.name}</span>
        <span className='match__vs'> vs </span>
        <span className={awayTeamClassName}>{awayTeam.name}</span>
      </td>
      <td className='match__scores'>{`${nullToDash(score.fullTime.homeTeam)} : ${nullToDash(score.fullTime.awayTeam)}`}</td>
      <td className='match__scores match__scores--halftime'>{`(${nullToDash(score.halfTime.homeTeam)} : ${nullToDash(score.halfTime.awayTeam)})`}</td>
    </tr>
  )
}