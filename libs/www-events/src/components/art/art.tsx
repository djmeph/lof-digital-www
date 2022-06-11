import { Container, Row } from 'react-bootstrap';

import {
  useEventsFeedContext,
  tidyAlphaSort,
} from '../../context/EventsFeedContext';

import styles from './art.module.scss';

export function ArtComponent() {
  const { art } = useEventsFeedContext();

  return (
    <Container className={`px-5 $styles['container']`}>
      {art
        .sort((a, b) => tidyAlphaSort(a, b, 'title'))
        .map((item) => (
          <Container key={item.id} className="my-5 mx-1">
            <Row className="mb-2">
              <h2 className={`text-secondary ${styles['art-item-name']}`}>
                {item.title}
              </h2>
              <span
                className={`col-lg-2 align-middle badge badge-pill ${
                  styles[`art-item-badge-${item.type}`]
                }`}
              >
                {item.type}
              </span>
            </Row>
            <Row className="col-12">
              <span>By {item.artist}</span>
            </Row>
            <Row className="col-12">
              <div className={` ${styles['art-item-description']}`}>
                {item.description}
              </div>
            </Row>
          </Container>
        ))}
    </Container>
  );
}

export default ArtComponent;
