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
      className={`text-center py-3 px-3 ${styles['banner-prompt']}`}
    >
      {children ? <div>{children}</div> : ''}
      <h1 className={`${styles['banner-header']}`}>{title}</h1>
    </Container>
  );
}

export default Banner;
