import { Ressource } from './ressource';

export type Generation = {
  id: string;
  name: string;
  abilities: Ressource[];
  names: { name: string; language: Ressource };
  main_region: Ressource;
  moves: Ressource[];
  pokemon_species: Ressource[];
  types: Ressource[];
  version_groups: Ressource[];
};
