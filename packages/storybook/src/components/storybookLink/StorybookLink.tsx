import { Link } from '@ovhcloud/ods-react';
import { navigate } from '@storybook/addon-links';
import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode,
  className?: string,
  kind?: string,
  story?: string,
  title?: string,
}

const StorybookLink = ({ children, className, kind, story, title }: Props) => {
  return (
    <Link className={ className || '' }
          href="#"
          onClick={ (e) => {
            e.preventDefault();
            navigate(title ? { title } : { kind, story });
          }}>
      { children }
    </Link>
  );
};

export {
  StorybookLink,
};
