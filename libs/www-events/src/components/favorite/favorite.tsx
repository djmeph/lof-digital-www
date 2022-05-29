import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useFavoritesContext } from '@lof-digital-www/shared';

import styles from './favorite.module.scss';

export interface FavoriteProps {
  eventId: number;
}

export function FavoriteComponent({ eventId }: FavoriteProps) {
  const { favorites, setFavorites } = useFavoritesContext();
  const toggleFav = () => {
    if (favorites.includes(eventId)) {
      const newFavorites = [...favorites];
      newFavorites.splice(favorites.indexOf(eventId), 1);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, eventId]);
    }
  };
  return (
    <span
      className={`${styles['favorite']} ${
        favorites.includes(eventId) ? styles['active'] : ''
      }`}
    >
      <FontAwesomeIcon icon={faStar} size="2x" border onClick={toggleFav} />
    </span>
  );
}

export default FavoriteComponent;
