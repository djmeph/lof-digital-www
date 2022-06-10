import { useState } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

import { Link } from '../link/link';
import NavLink from '../nav-link/nav-link';
import { ThemedBurnLogo } from '../themed-burn-logo/themed-burn-logo';

import styles from './navbar.module.scss';

export function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  let weekday = 'Wednesday';

  if (month === 6) {
    switch (day) {
      case 15:
        weekday = 'Wednesday';
        break;
      case 16:
        weekday = 'Thursday';
        break;
      case 17:
        weekday = 'Friday';
        break;
      case 18:
        weekday = 'Saturday';
        break;
      case 19:
        weekday = 'Sunday';
        break;
    }
  }

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
              <NavLink to={`/events/${weekday}`}>
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Events
                </Button>
              </NavLink>
              <NavLink to={`/favorites/${weekday}`}>
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
              <NavLink to="/art">
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Art Hub
                </Button>
              </NavLink>
              <NavLink to="/camps">
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Theme Camps
                </Button>
              </NavLink>
              <NavLink to="/vehicles">
                <Button
                  variant="light"
                  className={styles['hover']}
                  onClick={() => setExpanded(false)}
                >
                  Mutant Vehicles
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
