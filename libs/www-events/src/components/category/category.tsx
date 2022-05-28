import styles from './category.module.scss';

/* eslint-disable-next-line */
export interface CategoryProps {
  text: string;
  booleanValue: boolean;
}

export function Category({ booleanValue, text }: CategoryProps) {
  if (booleanValue) {
    return (
      <span className={styles['container']}>
        <span role="img" aria-label={text}>
          {' '}
          ☑️
        </span>
        &nbsp;{text}
      </span>
    );
  }
  return <span />;
}

export default Category;
