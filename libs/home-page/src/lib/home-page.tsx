import { faFire, faHandshake, faTent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, CardGroup, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';

import { Banner } from '@lof-digital-www/shared';

import styles from './home-page.module.scss';

export function HomePage() {
  return (
    <Container fluid className="px-0">
      <Banner title="Garden of Wonder">
        <div style={{ color: '#F1F3CF' }}>
          Great Lakes Experimental Arts Presents
        </div>
      </Banner>
      <CardGroup className="col-12 mx-auto my-2 text-center">
        <Row className="justify-content-center">
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title>2023 Map</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title>Survival Guide</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title>Gate Hours</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title>Volunteeripate</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title>Radio SGC</Card.Title>
            </Card.Body>
          </Card>
          <Card
            className={`col-xs-12 col-sm-4 col-lg-3 mx-1 my-1 align-middle ${styles['quick-link']}`}
          >
            <Card.Body>
              <Card.Title>Code of Conduct</Card.Title>
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
              <div className="text-white">
                <CountUp end={14} duration={10} separator="," />
              </div>
            </Card.Title>
            <Card.Text>Years in Existence</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container>
        <Row />
        <Row className="mx-2 my-2">
          <h2>Gate Hours</h2>
          <table>
            <tr>
              <td>Tuesday</td>
              <td colSpan={2}>
                10:00 A.M. EST – 10:00 PM EST - Early Entry only! Your ticket
                will show the date you can enter the event.
              </td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td colSpan={2}>10:00 A.M. EST – 11:59 PM EST</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td colSpan={2}>10:00 A.M. EST – 11:59 PM EST</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td colSpan={2}>10:00 A.M. EST – 10:00 PM EST</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>8:00 A.M. EST – 4:00 PM EST</td>
              <td>Participants only! No spectators, please.</td>
            </tr>
            <tr />
            <tr>
              <td>Sunday</td>
              <td>8:00 A.M. EST – 3:00 PM EST</td>
              <td>
                Exodus only. All participants except for organizers, DPW, and
                LNT must be off the property by 3:00 P.M.
              </td>
            </tr>
            <tr />
          </table>
        </Row>
        <Row className="mx-2">
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
