import { Nav } from 'react-bootstrap';

import styles from './outside-link.module.scss';

/* eslint-disable-next-line */
export interface OutsideLinkProps {
  to: string;
  children: React.ReactNode;
}

export function OutsideLink({ to, children }: OutsideLinkProps) {
  return (
    <Nav.Link href={to} className="py-1" target="_blank" rel="noreferrer">
      {children}
    </Nav.Link>
  );
}

export default OutsideLink;
