import {
  faScaleBalanced,
  faPalette,
  faChampagneGlasses,
  faFire,
  faUtensils,
  faIcons,
  faLightbulb,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-bootstrap';

import TagFilterButtonComponent from '../tag-filter-button/tag-filter-button';

function onToggle(
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.TouchEvent<HTMLButtonElement>
) {
  console.log('onToggle!');
  console.log(event.currentTarget.id);
  //TODO assign the logical opposite of the current state value for this filter
}

// this.state = {
//   food: false,
//   alcohol: false,
//   sober: false,
//   shows: false,
//   fire: false,
//   crafts: false,
//   explicit: false,
//   favorites: false
// };

export function TagFilterGroupComponent() {
  return (
    <Container>
      <Row>
        <TagFilterButtonComponent
          className="col-3"
          id="food"
          title="Food"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faUtensils} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="alcohol"
          title="Alcohol"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="sober"
          title="Sober"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faScaleBalanced} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="spectacle"
          title="Shows"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faIcons} />
        </TagFilterButtonComponent>
      </Row>
      <Row>
        <TagFilterButtonComponent
          className="col-3"
          id="fire"
          title="Fire Art"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faFire} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="crafts"
          title="Crafts"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faPalette} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="explicit"
          title="Explicit"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="favorites"
          title="Favorites"
          isToggled={false}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faStar} />
        </TagFilterButtonComponent>
      </Row>
    </Container>
  );
}

export default TagFilterGroupComponent;
