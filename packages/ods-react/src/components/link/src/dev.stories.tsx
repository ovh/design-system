import { forwardRef, useRef } from 'react';
import { ICON_NAME, Icon } from '../../icon/src';
import { Link } from '.';
import style from './dev.module.css';

export default {
  component: Link,
  title: 'Link dev',
};

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

export const OnClick = () => (
  <>
    <Link onClick={ () => console.log('click logged') }>
      My link
    </Link>

    <Link
      disabled
      onClick={ () => console.log('click not logged') }>
      My link
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

const DummyLink = forwardRef(({ children, ...props }: any, ref) => {
  return (
    <a data-test="dummy" { ...props } ref={ ref }>{ children }</a>
  );
});
export const RefAs = () => {
  const linkRef = useRef(null);

  return (
    <>
      <Link as={ DummyLink } href="#" ref={ linkRef }>
        My link
      </Link>
      <br />
      <button onClick={ () => console.log(linkRef.current) }>Log ref</button>
    </>
  );
};

export const CustomStyle = () => (
  <>
    <div style={{ marginBottom: '16px' }}>
      <Link
        className={ style['custom-link'] }
        href="#">
        Custom Styled Link
      </Link>
    </div>

    <div style={{ marginBottom: '16px' }}>
      <Link
        className={ style['custom-link'] }
        href="#">
        <Icon className={ style['custom-link-icon'] } name={ ICON_NAME.arrowLeft } />
        Link with Left Icon
      </Link>
    </div>

    <div>
      <Link
        className={ style['custom-link'] }
        href="#">
        Link with Right Icon
        <Icon className={ style['custom-link-icon'] } name={ ICON_NAME.arrowRight } />
      </Link>
    </div>
  </>
)

export const Accessibility = () => (
  <>
    <h3>Icon only</h3>
    <h4>With href</h4>
  <Link aria-label="Go to homepage" href="https://www.ovhcloud.com/">
    <Icon name={ ICON_NAME.home } />
  </Link>
    <h4>Without href</h4>
    <Link aria-label="Go to homepage">
      <Icon name={ ICON_NAME.home } />
    </Link>
    <h4>New tab</h4>
    <Link target="_blank" aria-label="Go to homepage">
      <Icon name={ ICON_NAME.home } />
    </Link>
    <h4>Disabled</h4>
    <Link disabled>
      <Icon name={ ICON_NAME.home } />
    </Link>
    <br />
    <h3>With text</h3>
    <h4>With href</h4>
    <Link aria-label="Go to homepage (Opens in a new page)" target="_blank" href="https://www.ovhcloud.com/">
      <Icon name={ ICON_NAME.home } />
      <span>Go to homepage</span>
    </Link>
    <h4>Without href</h4>
    <Link aria-label="Go to homepage">
      <Icon name={ ICON_NAME.home } />
      <span>Go to homepage</span>
    </Link>
    <h4>New tab</h4>
    <Link target="_blank" aria-label="Go to homepage">
      <Icon name={ ICON_NAME.home } />
      <span>Go to homepage</span>
    </Link>
    <h4>Disabled</h4>
    <Link disabled>
      <Icon name={ ICON_NAME.home } />
      <span>Go to homepage</span>
    </Link>
  </>
);
