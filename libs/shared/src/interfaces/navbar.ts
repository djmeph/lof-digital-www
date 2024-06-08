import { Dispatch, SetStateAction } from 'react';

export interface NavbarState {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}
