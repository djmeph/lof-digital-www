import { faFire, faHandshake, faTent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, CardGroup, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';

import { Banner } from '@lof-digital-www/shared';
// import {
//   ArtComponent,
//   CampsComponent,
//   VehiclesComponent,
// } from '@lof-digital-www/www-events';

export function HomePage() {
  return (
    <Container fluid className="px-0">
      <Banner title="Welcome to Lakes of Fire 2022!" />
      <CardGroup className="col-12 mx-auto my-5 text-center text-warning">
        <Card className="me-2">
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faFire} />
              </div>
              <CountUp end={2415} separator="," />
            </Card.Title>
            <Card.Text className="">Participants</Card.Text>
          </Card.Body>
        </Card>
        <Card className="me-2">
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faTent} />
              </div>
              <CountUp end={93} separator="," />
            </Card.Title>
            <Card.Text>Theme Camps</Card.Text>
          </Card.Body>
        </Card>
        <Card className="me-2">
          <Card.Body>
            <Card.Title>
              <div className="py-3 text-center">
                <FontAwesomeIcon size="3x" icon={faHandshake} />
              </div>
              <CountUp end={2694} separator="," />
            </Card.Title>
            <Card.Text>Volunteer Shifts</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container>
        <Row>
          <h2>Welcome to the Digital WhatWhereWhen v1.0</h2>
        </Row>
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
