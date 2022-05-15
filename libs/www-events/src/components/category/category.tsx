import styles from './category.module.scss';

/* eslint-disable-next-line */
export interface CategoryProps {
  text: string;
  booleanValue: boolean;
}

export function Category(props: CategoryProps) {
  if (props.booleanValue) {
    return (
      <span className={styles['container']}>
        <span role='img' aria-label={props.text}> ☑️</span>&nbsp;{props.text}
      </span>
    );
  }
  return <span />
}

export default Category;
