import { Button } from 'react-bootstrap';

import styles from './tag-filter-button.module.scss';

/* eslint-disable-next-line */
export interface TagFilterButtonProps {
  title: string;
  id: string;
  children?: React.ReactNode;
  isToggled: boolean;
  className?: string;
  onToggle: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => void;
}

export function TagFilterButtonComponent({
  isToggled,
  className,
  id,
  onToggle,
  children,
  title,
}: TagFilterButtonProps) {
  const buttonClasses = `${
    isToggled ? styles['toggled-on'] : styles['toggled-off']
  } ${className ? className : ''}`;
  return (
    <Button
      id={id}
      className={buttonClasses}
      variant={isToggled ? 'outline-red' : 'outline-light'}
      onClick={onToggle}
    >
      {children ? children : ''}
      <br />
      <span>{title}</span>
    </Button>
  );
}

export default TagFilterButtonComponent;
