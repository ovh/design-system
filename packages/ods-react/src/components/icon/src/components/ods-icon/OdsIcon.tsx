import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { type OdsIconName } from '../../constants/icon-name';
import style from './odsIcon.module.scss';

interface OdsIconProp extends ComponentPropsWithRef<'span'> {
  name: OdsIconName,
}

const OdsIcon: FC<OdsIconProp> = forwardRef(({
  className,
  name,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(style['ods-icon'], style[`ods-icon--${name}`], className) }
      ref={ ref }
      { ...props } />
  );
});

OdsIcon.displayName = 'OdsIcon';

export {
  OdsIcon,
  type OdsIconProp,
};
