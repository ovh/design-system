import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type MouseEvent, forwardRef } from 'react';
import { ODS_LINK_COLOR, type OdsLinkColor } from '../../constant/link-color';
import style from './odsLink.module.scss';

interface OdsLinkProp extends ComponentPropsWithRef<'a'> {
  color?: OdsLinkColor,
  disabled?: boolean,
}

const OdsLink: FC<OdsLinkProp> = forwardRef(({
  children,
  className,
  color = ODS_LINK_COLOR.primary,
  disabled = false,
  ...props
}, ref): JSX.Element => {
  function onClick(event: MouseEvent): void {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <a
      className={ classNames(
        style['ods-link'],
        style[`ods-link--${color}`],
        { [style['ods-link--disabled']]: disabled },
        className,
      )}
      onClick={ onClick }
      ref={ ref }
      tabIndex={ disabled ? -1 : props.tabIndex }
      { ...props }>
      { children }
    </a>
  );
});

OdsLink.displayName = 'OdsLink';

export {
  OdsLink,
  type OdsLinkProp,
};
