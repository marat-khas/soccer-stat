import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamMatches } from '@services/team';
import { getLeagueMatches } from '@services/league';
import { loading } from '@utilities/loading';
import { MatchItem } from '@components/matches/match-item';
import { MatchesState } from './types'
import './matches.scss';

export const Matches: FC = () => {
  const [matches, setMatches] = useState<MatchesState>(undefined);
  const [competition, setCompetition] = useState<string>('');
  const { teamId } = useParams<{ teamId: string }>()
  const { leagueId } = useParams<{ leagueId: string }>()

  const getMatches = teamId
    ? getTeamMatches.bind(null, teamId)
    : getLeagueMatches.bind(null, leagueId);

  useEffect(() => {
    loading.start();
    getMatches()
      .then(({ matches, competition }) => {
        setMatches(matches);
        if (competition) {
          setCompetition(competition.name);
        }
        loading.end();
      })
      .catch(() => {
        loading.end();
      });
  }, [])

  return (
    <div className='page matches'>
      <div className='container'>
        <div className='page__title'>
          <h1>Matches{competition && ` of ${competition}`}</h1>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Date</th>
              {matches && matches![0].competition && (
                <th>Competition</th>
              )}
              <th>Teams</th>
              <th>Full-time</th>
              <th>Half-time</th>
            </tr>
          </thead>
          <tbody>
            {matches?.length
              ? matches?.map((data) => (
                <MatchItem key={data.id} {...data} />
              ))
              : <tr><td>No matches</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}