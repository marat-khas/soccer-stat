export interface League {
  id: string;
  name: string;
  area: {
    ensignUrl: string;
  }
}

export type CompetitionsState = League[] | undefined;