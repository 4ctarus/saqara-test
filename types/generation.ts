import { Resource } from './resource';

export type Generation = {
  id: string;
  name: string;
  abilities: Resource[];
  names: { name: string; language: Resource };
  main_region: Resource;
  moves: Resource[];
  pokemon_species: Resource[];
  types: Resource[];
  version_groups: Resource[];
};
