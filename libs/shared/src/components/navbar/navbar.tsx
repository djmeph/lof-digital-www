import { useEffect } from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

import { useNavbarContext } from '../../context/navbar';
import { Link } from '../link/link';
import NavLink from '../nav-link/nav-link';

import styles from './navbar.module.scss';

export function NavbarComponent() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  let weekday = 'Wednesday';
  const { expanded, setExpanded } = useNavbarContext();

  const updateOrientation = () => setExpanded(false);

  useEffect(() => {
    window.addEventListener('orientationchange', updateOrientation);
    return () => {
      window.removeEventListener('orientationchange', updateOrientation);
    };
  });

  /**
   * Remember to update these dates every year
   */
  if (month === 7) {
    switch (day) {
      case 17:
        weekday = 'Wednesday';
        break;
      case 18:
        weekday = 'Thursday';
        break;
      case 19:
        weekday = 'Friday';
        break;
      case 20:
        weekday = 'Saturday';
        break;
      case 21:
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
          <Navbar.Brand className={styles['hover']} id="navbar-main">
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
              <NavLink to="/radio">
                <Button
                  variant="light"
                  className={`col-12 ${styles['hover']}`}
                  onClick={() => setExpanded(false)}
                >
                  Radio
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
