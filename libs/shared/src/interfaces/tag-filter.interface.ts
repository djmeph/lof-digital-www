import { Dispatch, SetStateAction } from 'react';

export interface TagFiltersContextParams {
  tagFilterState: Record<string, boolean>;
  setTagFilterState: Dispatch<SetStateAction<Record<string, boolean>>>;
}
