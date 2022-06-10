import { Container } from 'react-bootstrap';

import styles from './banner.module.scss';

/* eslint-disable-next-line */
export interface BannerProps {
  title: string;
  children?: React.ReactNode;
}

export function Banner({ title, children }: BannerProps) {
  return (
    <Container
      fluid
      className={`text-light text-center py-3 px-3 ${styles['prompt']}`}
    >
      <h1>{title}</h1>
      {children ? <div>{children}</div> : ''}
    </Container>
  );
}

export default Banner;
