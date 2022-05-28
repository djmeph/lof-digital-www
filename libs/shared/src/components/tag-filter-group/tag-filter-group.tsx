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

import { useTagFilterContext } from '../../context/tag-filter';
import TagFilterButtonComponent from '../tag-filter-button/tag-filter-button';

export function TagFilterGroupComponent() {
  const { tagFilterState, setTagFilterState } = useTagFilterContext();
  const onToggle = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => {
    setTagFilterState({
      ...tagFilterState,
      [event.currentTarget.id]: !tagFilterState[event.currentTarget.id],
    });
  };

  return (
    <Container>
      <Row>
        <TagFilterButtonComponent
          className="col-3"
          id="food"
          title="Food"
          isToggled={tagFilterState['food']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faUtensils} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="alcohol"
          title="Alcohol"
          isToggled={tagFilterState['alcohol']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="sober"
          title="Sober"
          isToggled={tagFilterState['sober']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faScaleBalanced} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="spectacle"
          title="Shows"
          isToggled={tagFilterState['spectacle']}
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
          isToggled={tagFilterState['fire']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faFire} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="crafts"
          title="Crafts"
          isToggled={tagFilterState['crafts']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faPalette} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="explicit"
          title="Explicit"
          isToggled={tagFilterState['explicit']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id="favorites"
          title="Favorites"
          isToggled={tagFilterState['favorites']}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faStar} />
        </TagFilterButtonComponent>
      </Row>
    </Container>
  );
}

export default TagFilterGroupComponent;
