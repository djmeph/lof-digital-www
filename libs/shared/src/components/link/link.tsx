import { useRouter } from 'next/router';
import styles from './link.module.scss';

/* eslint-disable-next-line */
export interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export function Link(props: LinkProps) {

  const router = useRouter();
  return (
    <div className={styles['container']} onClick={() => router.push(props.to)}>
      {props.children}
    </div>
  );
}

export default Link;
