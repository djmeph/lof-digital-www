import { Dispatch, SetStateAction } from 'react';

export interface TagFilters {
  food: boolean;
  alcohol: boolean;
  sober: boolean;
  shows: boolean;
  fire: boolean;
  crafts: boolean;
  explicit: boolean;
  favorites: boolean;
  spectacle: boolean;
}

export interface TagFiltersContextParams {
  state?: TagFilters;
  setState: Dispatch<SetStateAction<TagFilters | undefined>>;
}
