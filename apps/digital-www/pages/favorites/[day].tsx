import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { Container } from 'react-bootstrap';

import { DayOfWeek, FavoritesComponent } from '@lof-digital-www/www-events';

interface FavoritesProps {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function Favorites({ setExpanded }: FavoritesProps) {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');

  return (
    <Container fluid className="px-0">
      <FavoritesComponent day={day as DayOfWeek} setExpanded={setExpanded} />
    </Container>
  );
}

export default Favorites;
