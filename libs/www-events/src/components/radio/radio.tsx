import { Container, Row } from 'react-bootstrap';

import {
  useEventsFeedContext,
  tidyAlphaSort,
} from '../../context/EventsFeedContext';

import styles from './radio.module.scss';

export function RadioComponent() {
  const { radio } = useEventsFeedContext();

  return (
    <Container className={`px-5 $styles['container']`}>
      {radio
        // TODO find the currently playing radio item and put it up top
        // TODO transform the radio_time string into a date for sort and display
        .sort((a, b) => tidyAlphaSort(a, b, 'radio_time'))
        .map((item) => (
          <Container key={item.id} className="my-5 mx-1">
            <Row className="mb-2">
              <h2
                className={`text-white text-center ${styles['radio-item-name']}`}
              >
                {item.radio_dj_name}
              </h2>
              <h3 className={`${styles['radio-item-time']}`}>
                {`${item.radio_day}, ${item.radio_time}`}
              </h3>
            </Row>
            <Row className="col-12">
              <div className={`text-white ${styles['radio-item-description']}`}>
                {item.radio_description}
              </div>
            </Row>
          </Container>
        ))}
    </Container>
  );
}

export default RadioComponent;
