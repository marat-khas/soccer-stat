import { FC, ChangeEventHandler, useEffect, useState, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import qs from 'qs';
import { getTeamMatches } from '@services/team';
import { getLeagueMatches } from '@services/league';
import { loading } from '@utilities/loading';
import { Match } from '@components/match';
import { MatchesState } from './types'

import './matches.scss';

export const Matches: FC = () => {
  const [matches, setMatches] = useState<MatchesState>(undefined);
  const [filteredMatches, setFilteredMatches] = useState<MatchesState>(undefined);
  const [competition, setCompetition] = useState<string>('');
  const { teamId } = useParams<{ teamId: string }>()
  const { leagueId } = useParams<{ leagueId: string }>()

  const getMatches = teamId
    ? getTeamMatches.bind(null, teamId)
    : getLeagueMatches.bind(null, leagueId);

  useEffect(() => {
    loading.start();
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        setFilteredMatches(data.matches);
        if (data.competition) {
          setCompetition(data.competition.name);
        }
        loading.end();
      })
      .catch(() => {
        loading.end();
      });
  }, [])

  const years = new Set<number>();
  if (matches) {
    matches.forEach(({ utcDate }) => years.add(new Date(Date.parse(utcDate)).getFullYear()));
  }

  const history = useHistory();
  const { year } = qs.parse(history.location.search.slice(1));
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (year) {
      setFilteredMatches(matches?.filter(
        match => match.utcDate.includes(String(year))
      ));
      if (filterRef !== null) {
        Array.from(filterRef.current!.querySelectorAll('input'))
        .forEach(input => {
          if (input.value === year) {
            input.checked = true;
          }
        });
      }
    } else {
      setFilteredMatches(matches);
      if (filterRef !== null) {
        filterRef.current!.querySelector<HTMLInputElement>('input[value=all]')!.checked = true;
      }
    }
  }, [year, matches]);

  const filterHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target as HTMLInputElement;
    history.push(value.trim() && value !== 'all'
      ? `${history.location.pathname}?year=${value}`
      : history.location.pathname)
  }

  return (
    <div className='page'>
      <div className='container'>
        <div className='page__title'>
          <h1>Matches{competition && ` of ${competition}`}</h1>
        </div>
        <div className='matches'>
          <div className='matches__filter' ref={filterRef}>
            {years && [...years, 'all'].map(y => (
              <div className='matches__radio radio' key={y}>
                <input type='radio' id={`year${y}`} name='year' value={y} onChange={filterHandler} />
                <label htmlFor={`year${y}`}>{y}</label>
              </div>
            ))}
          </div>
          <div className='matches__wrapper'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Date</th>
                  {matches && matches.length ? matches[0].competition ? <th>Competition</th> : null : null}
                  <th>Teams</th>
                  <th>Full-time</th>
                  <th>Half-time</th>
                </tr>
              </thead>
              <tbody>
                {filteredMatches?.length
                  ? filteredMatches?.map((data) => (
                    <Match key={data.id} {...data} />
                  ))
                  : <tr><td colSpan={5}>No matches</td></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}