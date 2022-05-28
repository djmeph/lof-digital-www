import { FC, useState } from 'react';

import { TagFilterContext } from '../context/tag-filter';

const initState: Record<string, boolean> = {
  food: false,
  alcohol: false,
  sober: false,
  shows: false,
  fire: false,
  crafts: false,
  explicit: false,
  favorites: false,
  spectacle: false,
};

export const TagFilterProvider: FC = ({ children }) => {
  const [tagFilterState, setTagFilterState] =
    useState<Record<string, boolean>>(initState);
  return (
    <TagFilterContext.Provider
      value={{
        tagFilterState,
        setTagFilterState,
      }}
    >
      {children}
    </TagFilterContext.Provider>
  );
};
