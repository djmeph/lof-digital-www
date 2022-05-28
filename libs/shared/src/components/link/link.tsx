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
    <div className={styles['container']} onClick={() => router.push(to)}>
      {children}
    </div>
  );
}

export default Link;
