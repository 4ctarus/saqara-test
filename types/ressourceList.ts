import { Ressource } from './ressource';

export type RessourceList = {
  count: number;
  next: string;
  previous: string;
  results: Ressource[];
};
