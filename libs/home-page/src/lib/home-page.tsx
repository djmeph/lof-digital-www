import { faFire, faHandshake, faTent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, CardGroup, Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import { Link, OutsideLink, Banner } from '@lof-digital-www/shared';
import { useEventsFeedContext } from '@lof-digital-www/www-events';

import styles from './home-page.module.scss';

export function HomePage() {
  const { camps } = useEventsFeedContext();

  return (
    <Container fluid className="px-0">
      <Banner title="Imaginarium Aquarium">
        <div className={`${styles['pre-title']}`}>
          Great Lakes Experimental Arts Presents
        </div>
      </Banner>
      <CardGroup className="col-12 my-2 text-center">
        <Row className="justify-content-center mx-auto">
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Link to="/map">
              <Card.Body>
                <Card.Title className={styles['quick-link-title']}>
                  2024 Map
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <OutsideLink to="http://lakesoffire.org/the-event/survival-guide">
              <Card.Body>
                <Card.Title className={styles['quick-link-title']}>
                  Survival Guide
                </Card.Title>
              </Card.Body>
            </OutsideLink>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Link to="#gate-hours">
              <Card.Body>
                <Card.Title className={styles['quick-link-title']}>
                  Gate Hours
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <OutsideLink to="https://volunteer.lakesoffire.org">
              <Card.Body>
                <Card.Title className={styles['quick-link-title']}>
                  Volunteeripate
                </Card.Title>
              </Card.Body>
            </OutsideLink>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <OutsideLink to="https://shoutingfire.com/">
              <Card.Body>
                <Card.Title className={styles['quick-link-title']}>
                  Shouting Fire
                </Card.Title>
              </Card.Body>
            </OutsideLink>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <OutsideLink to="http://lakesoffire.org/code-of-conduct">
              <Card.Body>
                <Card.Title className={styles['quick-link-title']}>
                  Code of Conduct
                </Card.Title>
              </Card.Body>{' '}
            </OutsideLink>
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
              <CountUp end={2323} duration={10} separator="," />
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
              <CountUp end={camps.length} duration={10} separator="," />
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
              <CountUp end={3034} duration={10} separator="," />
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
        {/* <Row className="mx-2 pb-10">
          <a
            target="_blank"
            href="https://forms.gle/yhiXZPBGxyfmvoL6A"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Post-Event Survey
          </a>
        </Row> */}
      </Container>
    </Container>
  );
}
