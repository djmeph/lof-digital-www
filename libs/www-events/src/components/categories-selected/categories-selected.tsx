import { WwwEvent, WwwEventSingleTime } from '../../interfaces/www-events.interface';
import Category from '../category/category';
import styles from './categories-selected.module.scss';

/* eslint-disable-next-line */
export interface CategoriesSelectedProps {
  event: WwwEvent | WwwEventSingleTime;
}

export function CategoriesSelected(props: CategoriesSelectedProps) {
  return (
    <div className={styles['container']}>
      <Category text='Alcohol' booleanValue={props.event.alcohol} />
      <Category text='Red light' booleanValue={props.event.red_light} />
      <Category text='Fire art' booleanValue={props.event.fire_art} />
      <Category text='Spectale' booleanValue={props.event.spectacle} />
      <Category text='Crafting' booleanValue={props.event.crafting} />
      <Category text='Food' booleanValue={props.event.food} />
      <Category text='Sober' booleanValue={props.event.sober} />
    </div>
  );
}

export default CategoriesSelected;
