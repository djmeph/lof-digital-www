import { createContext, useContext } from 'react';

import { TagFiltersContextParams } from '../interfaces/tag-filter.interface';

export const TagFilterContext = createContext<TagFiltersContextParams>(
  {} as TagFiltersContextParams
);

export const useTagFilterContext = () => {
  const context = useContext(TagFilterContext);

  if (!context) {
    throw Error('useTagFilter must be used inside a `TagFilterProvider`');
  }
  return context;
};
