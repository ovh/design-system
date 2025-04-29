import { useRef } from 'react';
import { ICON_NAME, Icon } from '../../icon/src';
import { Link } from '.';
import style from './dev.module.css';

export default {
  component: Link,
  title: 'Link dev',
};

export const CustomStyle = () => (
  <Link
    className={ style['ods-link'] }
    href="#">
    My link
  </Link>
);

export const Default = () => (
  <Link href="#">
    My link
  </Link>
);

export const Disabled = () => (
  <>
    <Link
      disabled={ true }
      href="http://google.com"
      target="_blank">
      My link
    </Link>
    <br />
    <Link
      disabled={ false }
      href="http://google.com"
      target="_blank">
      My link
    </Link>
  </>
);

export const IconOnly = () => (
  <>
    <Link
      href="http://google.com"
      target="_blank">
      <Icon name={ ICON_NAME.home } />
    </Link>
    <br />
    <Link
      href="http://google.com"
      target="_blank">
      <Icon name={ ICON_NAME.arrowCrossed } />
    </Link>
  </>
);

export const Icons = () => (
  <>
    <Link
      href="http://google.com"
      target="_blank">
      <Icon name={ ICON_NAME.arrowLeft } /> My link
    </Link>
    <br />
    <Link
      href="http://google.com"
      target="_blank">
      <Icon name={ ICON_NAME.home } /> My link
    </Link>
    <br />
    <Link
      href="http://google.com"
      target="_blank">
      My link <Icon name={ ICON_NAME.arrowRight } />
    </Link>
  </>
);

export const Ref = () => {
  const linkRef = useRef(null);

  return (
    <>
      <Link href="#" ref={ linkRef }>
        My link
      </Link>
      <br />
      <button onClick={ () => console.log(linkRef.current) }>Log ref</button>
    </>
  );
};
