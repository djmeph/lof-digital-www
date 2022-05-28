import { useState } from 'react';
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './filters.module.scss';

export function FiltersComponent() {
  const data = useEventsFeedContext();
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles['container']}>
      <ButtonGroup className="mb-2">
        <ToggleButton
          type="checkbox"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checkbox
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
}

export default FiltersComponent;
