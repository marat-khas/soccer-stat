import { FC, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import qs from 'qs';
import { getLeagueTeams } from '@services/league'
import { loading } from '@utilities/loading';
import { Team } from '@components/team';

import { TeamsState } from './types'

import './teams.scss';

export const Teams: FC = () => {

  const [teams, setTeams] = useState<TeamsState>(undefined);
  const [filteredTeams, setFilteredTeams] = useState<TeamsState>(undefined);
  const [competition, setCompetition] = useState<string>('');

  const { leagueId } = useParams<{ leagueId: string }>();

  useEffect(() => {
    loading.start();
    getLeagueTeams(leagueId)
      .then((data) => {
        loading.end();
        setTeams(data!.teams);
        setFilteredTeams(data!.teams);
        setCompetition(data!.competition.name);
      })
      .catch(() => {
        loading.end();
      });
  }, []);

  const history = useHistory();
  const { filter } = qs.parse(history.location.search.slice(1));
  const filterRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (filter) {
      setFilteredTeams(teams?.filter(
        team => team.name.toLocaleLowerCase().includes((String(filter)).toLocaleLowerCase())
      ));
      if (filterRef !== null) {
        filterRef.current!.value = String(filter);
      }
    } else {
      setFilteredTeams(teams);
    }
  }, [filter, teams]);

  const filterHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target as HTMLInputElement;
    history.push(value.trim()
      ? `${history.location.pathname}?filter=${value}`
      : history.location.pathname)
  }

  return (
    <div className='page'>
      <div className='container'>
        <div className='page__title'>
          <h1>Teams of {competition}</h1>
        </div>
        <div className='teams'>
          <div className='teams__filter input'>
            <label htmlFor='team-filter'>
              <span>Filter</span>
              <input type='text' id='team-filter' ref={filterRef} onKeyUp={filterHandler} placeholder='team name' />
            </label>
          </div>
          <div className='teams__wrapper'>
            {
              filteredTeams?.map((data) => (
                <div className='teams__item' key={data.id}>
                  <Team {...data} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}