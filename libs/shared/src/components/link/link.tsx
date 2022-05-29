import { useRouter } from 'next/router';

import styles from './link.module.scss';

/* eslint-disable-next-line */
export interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children }: LinkProps) {
  const router = useRouter();
  return (
    <a
      href={to}
      className={styles['link']}
      onClick={(e) => {
        e.preventDefault();
        return router.push(to);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
