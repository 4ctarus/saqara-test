import { Resource } from './resource';

export type ResourceList = {
  count: number;
  next: string;
  previous: string;
  results: Resource[];
};
