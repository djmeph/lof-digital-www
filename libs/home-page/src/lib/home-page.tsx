import { faFire, faHandshake, faTent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, CardGroup, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';

import { Banner } from '@lof-digital-www/shared';

import styles from './home-page.module.scss';

export function HomePage() {
  return (
    <Container fluid className="px-0">
      <Banner title="Welcome to Lakes of Fire 2022!" />
      <CardGroup className="col-12 mx-auto my-2 text-center text-warning">
        <Card className={`mx-2 ${styles['count-up-card']}`}>
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faFire} />
              </div>
              <div className="text-white">
                <CountUp end={2415} duration={10} separator="," />
              </div>
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
              <div className="text-white">
                <CountUp end={93} duration={10} separator="," />
              </div>
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
              <div className="text-white">
                <CountUp end={2694} duration={10} separator="," />
              </div>
            </Card.Title>
            <Card.Text>Volunteer Shifts</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container>
        <Row>
          <p>
            At Lakes in Space, we are pleased to offer this slimmed-down digital
            guide. We encourage you to explore the Event schedule, press the
            Star button to mark your favorites, and review your saved events on
            the Agenda page. Most of all, we want this app to answer your
            questions and get you back into your Burn as quickly as possible.
          </p>
        </Row>
        <Row>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScOfYr_3Beox_QRfdoLjvbm7FLqj5ECbQMhjctO_bUgSqYtEg/viewform"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Send Feedback
          </a>
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage;
