interface SetAllDayFilterStateFn {
  (newState: boolean): void;
}

interface SetTagFilterStateFn {
  (newState: Record<string, boolean>): void;
}

export interface TagFiltersContextParams {
  tagFilterState: Record<string, boolean>;
  setTagFilterState: SetTagFilterStateFn;
  allDayFilterState: boolean;
  setAllDayFilterState: SetAllDayFilterStateFn;
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
