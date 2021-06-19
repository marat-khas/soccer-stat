export const TOKEN = '61185d39baf045cf9c6e2b91e2e3d6f3';

export const HOST = 'https://api.football-data.org/v2';
export const COMPETITON_URL = `${HOST}/competitions`;
export const TEAM_MATCHES_URL = (id: string) => `${HOST}/teams/${id}/matches`;