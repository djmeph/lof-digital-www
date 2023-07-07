import { Container, Row } from 'react-bootstrap';

import {
  useEventsFeedContext,
  tidyAlphaSort,
} from '../../context/EventsFeedContext';

import styles from './vehicles.module.scss';

export function VehiclesComponent() {
  const { vehicles } = useEventsFeedContext();

  return (
    <Container className="px-5">
      {vehicles
        .sort((a, b) => tidyAlphaSort(a, b, 'title'))
        .map((item) => (
          <Container
            key={item.id}
            className={`my-5 mx-1 ${styles['vehicle-item']}`}
          >
            <Row>
              <h2 className={`text-white ${styles['vehicle-item-name']}`}>
                {item.title}
              </h2>
            </Row>
            <Row>
              <div
                className={`text-white ${styles['vehicle-item-description']}`}
              >
                {item.description}
              </div>
            </Row>
          </Container>
        ))}
    </Container>
  );
}

export default VehiclesComponent;
