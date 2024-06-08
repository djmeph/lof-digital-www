import { createContext, useContext } from 'react';

import { NavbarState } from '../interfaces/navbar';

export const NavbarContext = createContext<NavbarState | undefined>(undefined);

export const useNavbarContext = (): NavbarState => {
  const navbarContext = useContext(NavbarContext);
  if (navbarContext === undefined) {
    throw new Error('useNavbarContext must be inside a Navbar provider');
  }
  return navbarContext;
};
