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
import { Container, Row, Col } from 'react-bootstrap';

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
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    if (tagFilterState === e.currentTarget.id) {
      return setTagFilterState(undefined);
    }
    setTagFilterState(e.currentTarget.id as TagFilter);
  };

  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="justify-content-between">
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id="all_day"
            title={`${allDayFilterState ? 'Show' : 'Hide'} All Day`}
            isToggled={allDayFilterState}
            onToggle={() => setAllDayFilterState(!allDayFilterState)}
          >
            <FontAwesomeIcon icon={faSun} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.FOOD}
            title="Food"
            isToggled={tagFilterState === TagFilter.FOOD}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faUtensils} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.ALCOHOL}
            title="Alcohol"
            isToggled={tagFilterState === TagFilter.ALCOHOL}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faChampagneGlasses} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.SOBER}
            title="Sober"
            isToggled={tagFilterState === TagFilter.SOBER}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faScaleBalanced} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.FIRE_ART}
            title="Fire Art"
            isToggled={tagFilterState === TagFilter.FIRE_ART}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faFire} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.CRAFTING}
            title="Crafting"
            isToggled={tagFilterState === TagFilter.CRAFTING}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faPalette} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.RED_LIGHT}
            title="Red Light"
            isToggled={tagFilterState === TagFilter.RED_LIGHT}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faLightbulb} />
          </TagFilterButtonComponent>
        </Col>
        <Col className="pb-2">
          <TagFilterButtonComponent
            className="w-100"
            id={TagFilter.SPECTACLE}
            title="Spectacle"
            isToggled={tagFilterState === TagFilter.SPECTACLE}
            onToggle={onToggle}
          >
            <FontAwesomeIcon icon={faIcons} />
          </TagFilterButtonComponent>
        </Col>
      </Row>
    </Container>
  );
}

export default TagFilterGroupComponent;
