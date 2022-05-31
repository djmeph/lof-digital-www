import { FC, useState } from 'react';

import { TagFilterContext } from '../context/tag-filter';
import { TagFilter } from '../interfaces/tag-filter.interface';

export const TagFilterProvider: FC = ({ children }) => {
  let restoreAllDayFilterState = false;

  if (typeof window !== 'undefined') {
    restoreAllDayFilterState = !!localStorage.getItem('allDayFilterState');
  }

  const [allDayFilterState, setAllDayFilterState] = useState<boolean>(
    restoreAllDayFilterState
  );

  const [tagFilterState, setTagFilterState] = useState<TagFilter | undefined>();

  return (
    <TagFilterContext.Provider
      value={{
        tagFilterState,
        setTagFilterState,
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
