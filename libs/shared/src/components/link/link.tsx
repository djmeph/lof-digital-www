import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

import styles from './link.module.scss';

export interface LinkProps {
  to: string;
  children: React.ReactNode;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function Link({ to, children, setExpanded }: LinkProps) {
  const router = useRouter();
  return (
    <a
      href={to}
      className={styles['link']}
      onClick={(e) => {
        e.preventDefault();
        router.push(to);
        return setExpanded(false);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
