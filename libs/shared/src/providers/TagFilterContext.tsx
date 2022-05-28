/* eslint-disable react/jsx-no-constructed-context-values */
import { FC, useState } from 'react';

import { TagFilterContext } from '../context/tag-filter';
import { TagFilters } from '../interfaces/tag-filter.interface';

export const TagFilterProvider: FC = ({ children }) => {
  const [state, setState] = useState<TagFilters>();
  return (
    <TagFilterContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </TagFilterContext.Provider>
  );
};
