import {
  WwwEvent,
  WwwEventSingleTime,
} from '../../interfaces/www-events.interface';
import Category from '../category/category';

import styles from './categories-selected.module.scss';

/* eslint-disable-next-line */
export interface CategoriesSelectedProps {
  event: WwwEvent | WwwEventSingleTime;
}

export function CategoriesSelected({ event }: CategoriesSelectedProps) {
  return (
    <div className={styles['container']}>
      <Category text="Alcohol" booleanValue={event.alcohol} />
      <Category text="Red light" booleanValue={event.red_light} />
      <Category text="Fire art" booleanValue={event.fire_art} />
      <Category text="Spectale" booleanValue={event.spectacle} />
      <Category text="Crafting" booleanValue={event.crafting} />
      <Category text="Food" booleanValue={event.food} />
      <Category text="Sober" booleanValue={event.sober} />
    </div>
  );
}

export default CategoriesSelected;
