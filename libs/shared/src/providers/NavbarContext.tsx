import { FC, useState } from 'react';

import { NavbarContext } from '../context/navbar';

export const NavbarProvider: FC = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return (
    <NavbarContext.Provider value={{ expanded, setExpanded } as any}>
      {children}
    </NavbarContext.Provider>
  );
};
