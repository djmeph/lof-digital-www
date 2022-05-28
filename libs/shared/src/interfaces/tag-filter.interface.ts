import { Dispatch, SetStateAction } from 'react';

export interface TagFiltersContextParams {
  tagFilterState: Record<string, boolean>;
  setTagFilterState: Dispatch<SetStateAction<Record<string, boolean>>>;
  allDayFilterState: boolean;
  setAllDayFilterState: Dispatch<SetStateAction<boolean>>;
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
