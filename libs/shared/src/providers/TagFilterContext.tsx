import { FC, useState } from 'react';

import { TagFilterContext } from '../context/tag-filter';
import { TagFilter } from '../interfaces/tag-filter.interface';

export const TagFilterProvider: FC = ({ children }) => {
  const [allDayFilterState, setAllDayFilterState] = useState<boolean>(false);
  const [tagFilterState, setTagFilterState] = useState<Record<string, boolean>>(
    {
      [TagFilter.FOOD]: false,
      [TagFilter.ALCOHOL]: false,
      [TagFilter.SOBER]: false,
      [TagFilter.FIRE_ART]: false,
      [TagFilter.CRAFTING]: false,
      [TagFilter.RED_LIGHT]: false,
      [TagFilter.SPECTACLE]: false,
    }
  );
  return (
    <TagFilterContext.Provider
      value={{
        tagFilterState,
        setTagFilterState,
        allDayFilterState,
        setAllDayFilterState,
      }}
    >
      {children}
    </TagFilterContext.Provider>
  );
};
