import { faFire, faHandshake, faTent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, CardGroup, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';

import { Link, OutsideLink, Banner } from '@lof-digital-www/shared';

import styles from './home-page.module.scss';

export function HomePage() {
  return (
    <Container fluid className="px-0">
      <Banner title="Imaginarium Aquarium">
        <div style={{ color: '#F1F3CF' }}>
          Great Lakes Experimental Arts Presents
        </div>
      </Banner>
      <CardGroup className="col-12 my-2 text-center">
        <Row className="justify-content-center mx-auto">
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title className={styles['quick-link-title']}>
                <Link to="/map">2024 Map</Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title className={styles['quick-link-title']}>
                <OutsideLink to="http://lakesoffire.org/the-event/survival-guide">
                  Survival Guide
                </OutsideLink>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title className={styles['quick-link-title']}>
                <Link to="#gate-hours">Gate Hours</Link>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title className={styles['quick-link-title']}>
                <OutsideLink to="https://volunteer.lakesoffire.org">
                  Volunteeripate
                </OutsideLink>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title className={styles['quick-link-title']}>
                <OutsideLink to="https://shoutingfire.com/">
                  Shouting Fire
                </OutsideLink>
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title className={styles['quick-link-title']}>
                <OutsideLink to="http://lakesoffire.org/code-of-conduct">
                  Code of Conduct
                </OutsideLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </CardGroup>
      <CardGroup className="col-12 mx-auto my-2 text-center text-warning">
        <Card className={`mx-2 ${styles['count-up-card']}`}>
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faFire} />
              </div>
              <CountUp end={2301} duration={10} separator="," />
            </Card.Title>
            <Card.Text className="">Participants</Card.Text>
          </Card.Body>
        </Card>
        <Card className={`mx-2 ${styles['count-up-card']}`}>
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faTent} />
              </div>
              <CountUp end={112} duration={10} separator="," />
            </Card.Title>
            <Card.Text>Theme Camps</Card.Text>
          </Card.Body>
        </Card>
        <Card className={`mx-2 ${styles['count-up-card']}`}>
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faHandshake} />
              </div>
              <CountUp end={2694} duration={10} separator="," />
            </Card.Title>
            <Card.Text>Volunteer Shifts</Card.Text>
          </Card.Body>
        </Card>
        <Card className={`mx-2 ${styles['count-up-card']}`}>
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <object
                  type="image/svg+xml"
                  data="/lof-logo-basic-thicklines.svg"
                  height="58"
                  className="lof-logo"
                >
                  LOF Logo
                </object>
              </div>
              <CountUp end={15} duration={10} separator="," />
            </Card.Title>
            <Card.Text>Years in Existence</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container>
        <Row />
        <Row className="mx-2 mt-2 mb-4 text-white">
          <h2 id="gate-hours">Gate Hours</h2>
          &nbsp; &nbsp;
          <h3>Tuesday</h3>
          <p>
            <b>10:00 A.M. EST – 10:00 PM EST.</b> Early Entry only! Your ticket
            will show the date you can enter the event.
          </p>
          <h3>Wednesday</h3>
          <p>
            <b>10:00 A.M. EST – 11:59 PM EST</b>
          </p>
          <h3>Thursday</h3>
          <p>
            <b>10:00 A.M. EST – 11:59 PM EST</b>
          </p>
          <h3>Friday</h3>
          <p>
            <b>10:00 A.M. EST – 10:00 PM EST</b>
          </p>
          <h3>Saturday</h3>
          <p>
            <b>8:00 A.M. EST – 4:00 PM EST.</b> Participants only! No
            spectators, please.
          </p>
          <h3>Sunday</h3>
          <p>
            <b>8:00 A.M. EST – 3:00 PM EST.</b> Exodus only. All participants
            except for organizers, DPW, and LNT must be off the property by 3:00
            P.M.
          </p>
        </Row>
        <Row className="mx-2 pb-10">
          <a
            target="_blank"
            href="https://forms.gle/yhiXZPBGxyfmvoL6A"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Post-Event Survey
          </a>
        </Row>
      </Container>
    </Container>
  );
}
