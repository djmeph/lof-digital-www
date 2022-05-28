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
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import TagFilterButtonComponent from '../tag-filter-button/tag-filter-button';

const initState: Record<string, boolean> = {
  food: false,
  alcohol: false,
  sober: false,
  shows: false,
  fire: false,
  crafts: false,
  explicit: false,
  favorites: false,
  spectacle: false,
};

export function TagFilterGroupComponent() {
  const [state, setState] = useState(initState);
  useEffect(() => {
    setState(initState);
  }, []);

  const onToggle = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => {
    setState({
      ...state,
      [event.currentTarget.id]: !state[event.currentTarget.id],
    });
  };

  return (
    <Container>
      <Row>
        <TagFilterButtonComponent
          className="col-3"
          id="food"
          title="Food"
          isToggled={state['food']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faUtensils} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="alcohol"
          title="Alcohol"
          isToggled={state['alcohol']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="sober"
          title="Sober"
          isToggled={state['sober']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faScaleBalanced} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="spectacle"
          title="Shows"
          isToggled={state['spectacle']}
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
          isToggled={state['fire']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faFire} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="crafts"
          title="Crafts"
          isToggled={state['crafts']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faPalette} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="explicit"
          title="Explicit"
          isToggled={state['explicit']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="favorites"
          title="Favorites"
          isToggled={state['favorites']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faStar} />
        </TagFilterButtonComponent>
      </Row>
    </Container>
  );
}

export default TagFilterGroupComponent;
