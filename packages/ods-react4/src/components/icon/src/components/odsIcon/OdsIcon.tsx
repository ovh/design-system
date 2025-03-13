import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { type OdsIconName } from '../../constants/icon-name';
import style from './odsIcon.module.scss';

interface OdsIconProp extends ComponentPropsWithoutRef<'span'> {
  name: OdsIconName,
}

const OdsIcon: FC<OdsIconProp> = ({
  className,
  name,
  ...props
}): JSX.Element => {
  return (
    <span
      className={ classNames(style['ods-icon'], style[`ods-icon--${name}`], className) }
      { ...props }>
    </span>
  );
}

export {
  OdsIcon,
  type OdsIconProp,
};
