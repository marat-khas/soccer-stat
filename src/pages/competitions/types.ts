export interface Competition {
  id: string;
  name: string;
  area: {
    ensignUrl: string;
  }
}

export type CompetitionsState = Competition[] | undefined;