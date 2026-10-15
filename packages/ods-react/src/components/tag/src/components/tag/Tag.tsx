import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon, type IconName } from '../../../../icon/src';
import { TAG_SIZE, type TagSize } from '../../constants/tag-size';
import { TAG_STATUS, type TagStatus } from '../../constants/tag-status';
import style from './tag.module.scss';

interface TagProp extends ComponentPropsWithRef<'button'> {
  /**
   * Removed in v20, use status. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  color?: never,
  /**
   * The icon to display on the right side.
   */
  icon?: IconName | null,
  /**
   * The size preset to use.
   */
  size?: TagSize;
  /**
   * @type=TAG_STATUS
   * The status preset to use.
   */
  status?: TagStatus;
}

const Tag: FC<TagProp> = forwardRef(({
  children,
  className,
  icon = ICON_NAME.xmark,
  size = TAG_SIZE.md,
  status = TAG_STATUS.information,
  ...props
}, ref): JSX.Element => {
  return (
    <button
      className={ classNames(
        style['tag'],
        style[`tag--${status}`],
        style[`tag--${size}`],
        className,
      )}
      data-ods="tag"
      ref={ ref }
      type="button"
      { ...props }>
      { children }

      {
        !!icon &&
        <Icon
          className={ style['tag__close'] }
          name={ icon } />
      }
    </button>
  );
});

Tag.displayName = 'Tag';

export {
  Tag,
  type TagProp,
};
