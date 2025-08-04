import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type IconName } from '../../constants/icon-name';
import style from './icon.module.scss';

interface IconProp extends ComponentPropsWithRef<'span'> {
  /**
   * The icon name.
   */
  name: IconName,
}

const Icon: FC<IconProp> = forwardRef(({
  className,
  name,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(
        style['icon'],
        style[`icon--${name}`],
        className,
      )}
      data-ods="icon"
      ref={ ref }
      role="presentation"
      { ...props } />
  );
});

Icon.displayName = 'Icon';

export {
  Icon,
  type IconProp,
};
