import styles from './navbar.module.scss';
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link } from '../link/link';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function NavbarComponent(props: NavbarProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles['container']}>
      <Navbar bg='light' expand='lg' fixed='top' expanded={expanded}>
        <Container>
          <Navbar.Brand className={styles['hover']}>
            <Link to='/'>LoF 2022 Digital WWW</Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse>
            <Navbar className='me-auto'>
              <Link to='/events/Wednesday'>
                <Button
                  variant='light'
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Events
                </Button>
              </Link>
              <Link to='/week-view'>
                <Button
                  variant='light'
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Week View
                </Button>
              </Link>
              <Link to='/day-view/Wednesday'>
                <Button
                  variant='light'
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Day View
                </Button>
              </Link>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
