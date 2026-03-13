import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef, useState } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import style from './avatar.module.scss';

interface AvatarProp extends ComponentPropsWithRef<'div'> {
  /**
   * Fallback content to display when the image fails to load.
   * Defaults to a user icon.
   */
  fallback?: ReactNode,
  /**
   * The image source URL.
   */
  src?: string,
}

const Avatar: FC<AvatarProp> = forwardRef(({
  className,
  children,
  fallback = <Icon name={ ICON_NAME.user } />,
  src,
  ...props
}, ref): JSX.Element => {
  const [hasImageError, setHasImageError] = useState(false);

  function renderContent(): ReactNode {
    if (children) {
      return children;
    }

    if (src && !hasImageError) {
      return (
        <img
          alt=""
          className={ style['avatar__image'] }
          onError={ () => setHasImageError(true) }
          src={ src } />
      );
    }

    return fallback;
  }

  return (
    <div
      className={ classNames(style['avatar'], className) }
      data-ods="avatar"
      ref={ ref }
      { ...props }>
      { renderContent() }
    </div>
  );
});

Avatar.displayName = 'Avatar';

export {
  Avatar,
  type AvatarProp,
};
