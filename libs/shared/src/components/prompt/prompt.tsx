import styles from './prompt.module.scss';

/* eslint-disable-next-line */
export interface PromptProps {}

export function Prompt(props: PromptProps) {
  return (
    <div className={styles['prompt']}>
      <h1>Welcome to Prompt!</h1>
    </div>
  );
}

export default Prompt;
