interface SetFavoritesFn {
  (newFavs: number[]): void;
}

export interface FavoritesContextParams {
  favorites: number[];
  setFavorites: SetFavoritesFn;
}
