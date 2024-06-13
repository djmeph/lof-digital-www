import { Nav } from 'react-bootstrap';

import { useNavbarContext } from '../../context/navbar';

import styles from './outside-link.module.scss';

/* eslint-disable-next-line */
export interface OutsideLinkProps {
  to: string;
  children: React.ReactNode;
}

export function OutsideLink({ to, children }: OutsideLinkProps) {
  const { setExpanded } = useNavbarContext();
  return (
    <Nav.Link
      href={to}
      className="py-1"
      target="_blank"
      rel="noreferrer"
      onClick={(e) => {
        e.preventDefault();
        setExpanded(false);
        return window.open(to)?.focus();
      }}
    >
      {children}
    </Nav.Link>
  );
}

export default OutsideLink;
