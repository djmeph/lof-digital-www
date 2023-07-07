import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

import { Link } from '../link/link';
import NavLink from '../nav-link/nav-link';
import { OutsideLink } from '../outside-link/outside-link';
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
        <Container className="container-fluid">
          <Navbar.Brand className={styles['hover']}>
            <Link to="/">
              <span className={`text-light mx-3 ${styles['title-font']}`}>
                Lakes of Fire
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavLink to={`/events/${weekday}`}>
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Events
                </Button>
              </NavLink>
              <NavLink to={`/favorites/${weekday}`}>
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Favorites
                </Button>
              </NavLink>
              <NavLink to="/week-view">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Agenda
                </Button>
              </NavLink>
              <NavLink to="/art">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Art
                </Button>
              </NavLink>
              <NavLink to="/camps">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Camps
                </Button>
              </NavLink>
              <NavLink to="/vehicles">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Vehicles
                </Button>
              </NavLink>
              <OutsideLink to="http://lakesoffire.org/the-event/code-of-conduct/">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  <FontAwesomeIcon icon={faLink} />
                  COC
                </Button>
              </OutsideLink>
              <OutsideLink to="http://lakesoffire.org/the-event/survival-guide/">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  <FontAwesomeIcon icon={faLink} />
                  Survival Guide
                </Button>
              </OutsideLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
