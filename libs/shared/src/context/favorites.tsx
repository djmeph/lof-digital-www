import { createContext, useContext } from 'react';

import { FavoritesContextParams } from '../interfaces/favorites.interface';

export const FavoritesContext = createContext<FavoritesContextParams>(
  {} as FavoritesContextParams
);

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw Error(
      'useFavoritesContext must be used inside a `FavoritesProvider`'
    );
  }

  return context;
};
