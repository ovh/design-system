import { ICON_NAME, Icon, Link, type LinkProp } from '@ovhcloud/ods-react';
import React, { type ComponentPropsWithRef, type JSX, useMemo } from 'react';

const ExternalLink = ({ children, href, ...prop }: LinkProp & Omit<ComponentPropsWithRef<'a'>, keyof LinkProp>): JSX.Element => {
  const resolvedHref = useMemo(() => {
    if (!href) {
      return;
    }

    if (href.startsWith('http')) {
      return href;
    }

    // Make relative paths works when deployed on CI
    const pathNames = window.location.pathname.split('/');
    if (['iframe.html', 'index.html'].indexOf(pathNames[pathNames.length - 1]) >= 0) {
      pathNames.pop();
    }
    return `${window.location.origin}${pathNames.join('/')}${href.startsWith('/') ? href : `/${href}`}`;
  }, [href, window.location]);

  return (
    <Link
      { ...prop }
      href={ resolvedHref }
      target="_blank">
      { children } <Icon name={ ICON_NAME.externalLink } />
    </Link>
  );
};

export {
  ExternalLink,
};
