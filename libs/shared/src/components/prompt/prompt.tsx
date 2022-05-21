import styles from './prompt.module.scss';
import { Container } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface PromptProps {
  title: string;
  children?: React.ReactNode;
}

export function Prompt(props: PromptProps) {
  return (
    <Container className={"text-light text-center py-3 px-3 " + styles['prompt']}>
      <h1>
        {props.title}
      </h1>
      { props.children ? <div>props.children</div> : "" }
    </Container>
  );
}

export default Prompt;
