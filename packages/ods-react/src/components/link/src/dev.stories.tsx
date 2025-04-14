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
      My link <Icon name={ ICON_NAME.arrowRight } />
    </Link>
  </>
);
