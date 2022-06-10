import { Container, Row } from 'react-bootstrap';

import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './camps.module.scss';

export function CampsComponent() {
  const { camps } = useEventsFeedContext();

  return (
    <Container className={`px-5 $styles['container']`}>
      {camps
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        .map((item) => (
          <Container key={item.id} className="my-5 mx-1">
            <Row className="mb-2">
              <h2 className={`col-8 ${styles['camp-item-name']}`}>
                {item.name}
              </h2>
              <div className="col-4 text-right">
                <span
                  className={`badge badge-pill ${
                    styles[`camp-item-badge-neighborhood`]
                  }`}
                >
                  {item.neighborhood}
                </span>
                <span>&nbsp;</span>
                <span
                  className={`badge badge-pill ${
                    styles[`camp-item-badge-site`]
                  }`}
                >
                  Site {item.site}
                </span>
              </div>
            </Row>
            <Row className="col-12">
              <div className={` ${styles['camp-item-description']}`}>
                {item.description}
              </div>
            </Row>
          </Container>
        ))}
    </Container>
  );
}

export default CampsComponent;
