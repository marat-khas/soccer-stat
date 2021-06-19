export interface Match {
  id: number;
  awayTeam: { id: number, name: string };
  homeTeam: { id: number, name: string };
  competition?: { id: number, name: string };
  score: {
    winner: "AWAY_TEAM" | "HOME_TEAM" | "DRAW";
    fullTime: { homeTeam: number | null; awayTeam: number | null;};
    halfTime: { homeTeam: number | null; awayTeam: number | null;};
  }
  utcDate: string;
}