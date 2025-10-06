import classNames from 'classnames';
import React, { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import style from './icon.module.css';

enum ICON_NAME {
  github = 'github',
  moon = 'moon',
  sun = 'sun',
}

interface IconProp extends ComponentPropsWithRef<'span'> {
  name: ICON_NAME,
}

const Icon: FC<IconProp> = ({
  className,
  name,
  ...props
}): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['icon'],
        style[`icon--${name}`],
        className,
      )}
      role="presentation"
      { ...props } />
  );
};

Icon.displayName = 'Icon';

export {
  ICON_NAME,
  Icon,
  type IconProp,
};
