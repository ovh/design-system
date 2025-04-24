import { Link as OdsLink, LinkProp as OdsLinkProp } from '@ovhcloud/ods-react';
import { type ComponentPropsWithRef, type ReactElement } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProp } from 'react-router-dom';

interface LinkProp extends ComponentPropsWithRef<'a'>, RouterLinkProp, Pick<OdsLinkProp, 'disabled'> {}

function Link({
  children,
  ...props
}: LinkProp): ReactElement {
  return (
    <OdsLink
      as={ RouterLink }
      { ...props }>
      { children }
    </OdsLink>
  );
}

export { Link };
