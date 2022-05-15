import styles from './navbar.module.scss';
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import Link from '../link/link';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function NavbarComponent(props: NavbarProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles['container']}>
      <Navbar bg='light' expand='lg' fixed='top' expanded={expanded}>
        <Container>
          <Navbar.Brand>LoF 2022 Digital WWW</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Navbar className='me-auto'>
              <Nav.Link>
                <Link to='/'>
                  <Button
                    variant='light'
                    className={styles['hover']}
                    onClick={() => setExpanded(false)}
                  >
                    Events
                  </Button>
                </Link>
              </Nav.Link>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
