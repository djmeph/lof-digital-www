import { useRouter } from 'next/router';
import styles from './link.module.scss';

/* eslint-disable-next-line */
export interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export function Link(props: LinkProps) {
  const router = useRouter();
  const navigate = () => router.push(props.to);
  return (
    <div className={styles['container']} onClick={navigate}>
      {props.children}
    </div>
  );
}

export default Link;
