import {
  faScaleBalanced,
  faPalette,
  faChampagneGlasses,
  faFire,
  faUtensils,
  faIcons,
  faLightbulb,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-bootstrap';

import { useTagFilterContext } from '../../context/tag-filter';
import { TagFilter } from '../../interfaces/tag-filter.interface';
import TagFilterButtonComponent from '../tag-filter-button/tag-filter-button';

export function TagFilterGroupComponent() {
  const {
    tagFilterState,
    setTagFilterState,
    allDayFilterState,
    setAllDayFilterState,
  } = useTagFilterContext();

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
          id="all_day"
          title="All Day"
          isToggled={allDayFilterState}
          onToggle={() => setAllDayFilterState(!allDayFilterState)}
        >
          <FontAwesomeIcon icon={faSun} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.FOOD}
          title="Food"
          isToggled={tagFilterState[TagFilter.FOOD]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faUtensils} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.ALCOHOL}
          title="Alcohol"
          isToggled={tagFilterState[TagFilter.ALCOHOL]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.SOBER}
          title="Sober"
          isToggled={tagFilterState[TagFilter.SOBER]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faScaleBalanced} />
        </TagFilterButtonComponent>
      </Row>
      <Row>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.FIRE_ART}
          title="Fire Art"
          isToggled={tagFilterState[TagFilter.FIRE_ART]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faFire} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.CRAFTING}
          title="Crafting"
          isToggled={tagFilterState[TagFilter.CRAFTING]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faPalette} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.RED_LIGHT}
          title="Red Light"
          isToggled={tagFilterState[TagFilter.RED_LIGHT]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </TagFilterButtonComponent>
        <TagFilterButtonComponent
          className="col-3"
          id={TagFilter.SPECTACLE}
          title="Spectacle"
          isToggled={tagFilterState[TagFilter.SPECTACLE]}
          onToggle={onToggle}
        >
          <FontAwesomeIcon icon={faIcons} />
        </TagFilterButtonComponent>
      </Row>
    </Container>
  );
}

export default TagFilterGroupComponent;
