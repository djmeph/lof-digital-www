import { Container } from 'react-bootstrap';

import styles from './prompt.module.scss';

/* eslint-disable-next-line */
export interface PromptProps {
  title: string;
  children?: React.ReactNode;
}

export function Prompt({ title, children }: PromptProps) {
  return (
    <Container
      className={`text-light text-center py-3 px-3 ${styles['prompt']}`}
    >
      <h1>{title}</h1>
      {children ? <div>{children}</div> : ''}
    </Container>
  );
}

export default Prompt;
