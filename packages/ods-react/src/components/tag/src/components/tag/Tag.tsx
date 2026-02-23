import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon, type IconName } from '../../../../icon/src';
import { TAG_COLOR, type TagColor } from '../../constants/tag-color';
import { TAG_SIZE, type TagSize } from '../../constants/tag-size';
import style from './tag.module.scss';

interface TagProp extends ComponentPropsWithRef<'button'> {
  /**
   * @type=TAG_COLOR
   * The color preset to use.
   */
  color?: TagColor;
  /**
   * The icon to display on the right side.
   */
  icon?: IconName | null,
  /**
   * The size preset to use.
   */
  size?: TagSize;
}

const Tag: FC<TagProp> = forwardRef(({
  children,
  className,
  color = TAG_COLOR.information,
  icon = ICON_NAME.xmark,
  size = TAG_SIZE.md,
  ...props
}, ref): JSX.Element => {
  return (
    <button
      className={ classNames(
        style['tag'],
        style[`tag--${color}`],
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
