import { FC, KeyboardEventHandler, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLeagueTeams } from '@services/league'
import { loading } from '@utilities/loading';
import { TeamItem } from '@components/teams/team-item';
import { Filter } from '@components/filter';
import { TeamsState } from './types'
import './teams.scss';

export const Teams: FC = () => {

  const [teams, setTeams] = useState<TeamsState>(undefined);
  const [filteredTeams, setFilteredTeams] = useState<TeamsState>(undefined);
  const [competition, setCompetition] = useState<string>('');

  const { leagueId } = useParams<{ leagueId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      loading.start();
      const data = await getLeagueTeams(leagueId)
        .catch(() => {
          loading.end();
        });
      loading.end();
      setTeams(data!.teams);
      setFilteredTeams(data!.teams);
      setCompetition(data!.competition.name);

    };
    fetchData();
  }, []);

  const filterHandler: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target as HTMLInputElement;
    setFilteredTeams(teams?.filter(team => team.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  }

  return (
    <div className='page teams'>
      <div className='container'>
        <div className='page__title'>
          <h1>Teams of {competition}</h1>
        </div>
        <Filter id='team-filter' keyupHandler={filterHandler} />
        <div className='teams'>
          <div className='teams__wrapper'>
            {
              filteredTeams?.map((data) => (
                <div className='teams__item' key={data.id}>
                  <TeamItem {...data} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}