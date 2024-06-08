import { useRouter } from 'next/router';

import { useNavbarContext } from '../../context/navbar';

import styles from './link.module.scss';

export interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children }: LinkProps) {
  const router = useRouter();
  const { setExpanded } = useNavbarContext();
  return (
    <a
      href={to}
      className={styles['link']}
      onClick={(e) => {
        e.preventDefault();
        setExpanded(false);
        return router.push(to);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
