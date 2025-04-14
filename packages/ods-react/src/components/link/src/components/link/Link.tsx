import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type MouseEvent, forwardRef } from 'react';
import { LINK_COLOR, type LinkColor } from '../../constant/link-color';
import style from './link.module.scss';

interface LinkProp extends ComponentPropsWithRef<'a'> {
  color?: LinkColor,
  disabled?: boolean,
}

const Link: FC<LinkProp> = forwardRef(({
  children,
  className,
  color = LINK_COLOR.primary,
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
        style['link'],
        style[`link--${color}`],
        { [style['link--disabled']]: disabled },
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

Link.displayName = 'Link';

export {
  Link,
  type LinkProp,
};
