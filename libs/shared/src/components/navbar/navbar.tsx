import { useState } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

import { Link } from '../link/link';
import NavLink from '../nav-link/nav-link';
import { ThemedBurnLogo } from '../themed-burn-logo/themed-burn-logo';

import styles from './navbar.module.scss';

export function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand className={styles['hover']}>
            <Link to="/">
              <ThemedBurnLogo />
              <span className={`text-light mx-3 ${styles['title-font']}`}>
                LAKES IN SPACE
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavLink to="/events/Wednesday">
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Events
                </Button>
              </NavLink>
              <NavLink to="/favorites/Wednesday">
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Favorites
                </Button>
              </NavLink>
              <NavLink to="/week-view">
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Agenda
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
