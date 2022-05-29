import { FC, useState } from 'react';

import { TagFilterContext } from '../context/tag-filter';
import { TagFilter } from '../interfaces/tag-filter.interface';

export const TagFilterProvider: FC = ({ children }) => {
  let restoreAllDayFilterState = false;
  let restoreTagFilterState: Record<string, boolean> = {
    [TagFilter.FOOD]: false,
    [TagFilter.ALCOHOL]: false,
    [TagFilter.SOBER]: false,
    [TagFilter.FIRE_ART]: false,
    [TagFilter.CRAFTING]: false,
    [TagFilter.RED_LIGHT]: false,
    [TagFilter.SPECTACLE]: false,
  };

  if (typeof window !== 'undefined') {
    restoreAllDayFilterState = !!localStorage.getItem('allDayFilterState');
    const getTagFilterState = localStorage.getItem('tagFilterState');
    restoreTagFilterState = getTagFilterState
      ? JSON.parse(getTagFilterState)
      : restoreTagFilterState;
  }

  const [allDayFilterState, setAllDayFilterState] = useState<boolean>(
    restoreAllDayFilterState
  );
  const [tagFilterState, setTagFilterState] = useState<Record<string, boolean>>(
    restoreTagFilterState
  );

  return (
    <TagFilterContext.Provider
      value={{
        tagFilterState,
        setTagFilterState: (newState: Record<string, boolean>): void => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('tagFilterState', JSON.stringify(newState));
          }
          setTagFilterState(newState);
        },
        allDayFilterState,
        setAllDayFilterState: (newState: boolean): void => {
          if (typeof window !== 'undefined') {
            if (newState) {
              localStorage.setItem('allDayFilterState', '1');
            } else {
              localStorage.removeItem('allDayFilterState');
            }
          }
          setAllDayFilterState(newState);
        },
      }}
    >
      {children}
    </TagFilterContext.Provider>
  );
};
