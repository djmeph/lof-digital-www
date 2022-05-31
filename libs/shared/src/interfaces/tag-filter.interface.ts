import { Dispatch, SetStateAction } from 'react';

interface SetAllDayFilterStateFn {
  (newState: boolean): void;
}

export enum TagFilter {
  FOOD = 'food',
  ALCOHOL = 'alcohol',
  SOBER = 'sober',
  FIRE_ART = 'fire_art',
  CRAFTING = 'crafting',
  RED_LIGHT = 'red_light',
  SPECTACLE = 'spectacle',
}

export interface TagFiltersContextParams {
  tagFilterState?: TagFilter;
  setTagFilterState: Dispatch<SetStateAction<TagFilter | undefined>>;
  allDayFilterState: boolean;
  setAllDayFilterState: SetAllDayFilterStateFn;
}
