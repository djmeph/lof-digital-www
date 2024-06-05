import { Dispatch, SetStateAction } from 'react';
import { Container } from 'react-bootstrap';

import { HomePage } from '@lof-digital-www/home-page';

interface IndexProps {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function Index({ expanded, setExpanded }: IndexProps) {
  return (
    <Container fluid className="px-0">
      <HomePage expanded={expanded} setExpanded={setExpanded} />
    </Container>
  );
}

export default Index;
