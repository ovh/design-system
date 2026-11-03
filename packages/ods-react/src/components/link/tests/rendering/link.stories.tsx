import { type CSSProperties } from 'react';
import { Icon, ICON_NAME } from '../../../icon/src';
import { Link } from '../../src';

export default {
  component: Link,
  title: 'Tests rendering',
};

export const customStyle = () => (
  <Link
    data-testid="custom-style"
    href="#"
    style={{ height: '42px' }}>
    Custom Style
  </Link>
);

// A label rendered by a component, as a translation would be: no text in the children of the Link.
const Label = () => <>Component label</>;

export const restUnderline = () => (
  <>
    <Link
      data-testid="rest-underline-default"
      href="#">
      Default
    </Link>

    <Link
      data-testid="rest-underline-component-label"
      href="#">
      <Label />
    </Link>

    <Link
      aria-label="Icon only"
      data-testid="rest-underline-no-text"
      href="#">
      <Icon name={ ICON_NAME.cog } />
    </Link>

    <Link
      aria-label="Icon only in a fragment"
      data-testid="rest-underline-fragment"
      href="#">
      <>
        <Icon name={ ICON_NAME.cog } />
      </>
    </Link>

    <div style={{
      '--ods-link-underline-thickness': '3px',
      '--ods-link-underline-thickness-hover': '5px',
    } as CSSProperties}>
      <Link
        data-testid="rest-underline-inherited"
        href="#">
        Inherited
      </Link>

      <Link
        data-testid="rest-underline-inherited-disabled"
        disabled
        href="#">
        Inherited disabled
      </Link>
    </div>

    <Link
      data-testid="rest-underline-disabled"
      disabled
      href="#">
      Disabled
    </Link>

    <Link
      aria-label="Icon only disabled"
      data-testid="rest-underline-no-text-disabled"
      disabled
      href="#">
      <Icon name={ ICON_NAME.cog } />
    </Link>
  </>
);

export const render = () => (
  <Link
    data-testid="render"
    href="#">
    Render
  </Link>
);
