import { Container, Row } from 'react-bootstrap';

import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './art.module.scss';

export function ArtComponent() {
  const { art } = useEventsFeedContext();

  return (
    <Container className={`px-5 $styles['container']`}>
      {art
        .sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
        .map((item) => (
          <Container key={item.id} className="my-5 mx-1">
            <Row>
              <h2 className={`col-10 ${styles['art-item-name']}`}>
                {item.title}
              </h2>
              <div className="col-2 text-right">
                <span
                  className={`align-middle badge badge-pill ${
                    styles[`art-item-badge-${item.type}`]
                  }`}
                >
                  {item.type}
                </span>
              </div>
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
