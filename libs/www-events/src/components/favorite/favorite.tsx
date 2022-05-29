import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './favorite.module.scss';

export interface FavoriteProps {
  active: boolean;
  eventId: number;
}

export function FavoriteComponent({ active }: FavoriteProps) {
  return (
    <span className={`${styles['favorite']} ${active ? styles['active'] : ''}`}>
      <FontAwesomeIcon icon={faStar} size="2x" border />
    </span>
  );
}

export default FavoriteComponent;
