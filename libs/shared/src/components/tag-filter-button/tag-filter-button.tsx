import styles from './tag-filter-button.module.scss';
import { Button } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface TagFilterButtonProps {
  title: string;
  id: string;
  children?: React.ReactNode;
  isToggled: boolean;
  className?: string;
  onToggle: (event:React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

export function TagFilterButtonComponent(props: TagFilterButtonProps) {
  const buttonClasses = (props.isToggled ? styles['toggled-on'] : styles['toggled-off']) + " " + 
  props.className ? props.className : "";

  return (
    <Button id={props.id}
    className={buttonClasses} 
    variant={props.isToggled ? "outline-red" : "outline-light"}
    onClick={props.onToggle}
    >
      { props.children ? props.children : "" }
      <br/><span>{props.title}</span>
    </Button>
  );
}

export default TagFilterButtonComponent;
