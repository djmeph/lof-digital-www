import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import { DayOfWeek, FavoritesComponent } from '@lof-digital-www/www-events';

export function Favorites() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');

  return (
    <Container>
      <FavoritesComponent day={day as DayOfWeek} />
    </Container>
  );
}

export default Favorites;
