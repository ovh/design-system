import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { warnDeprecated } from '../../../../../utils/deprecation';
import { ICON_NAME, Icon, type IconName } from '../../../../icon/src';
import { TAG_COLOR, type TagColor } from '../../constants/tag-color';
import { TAG_SIZE, type TagSize } from '../../constants/tag-size';
import { TAG_STATUS, type TagStatus } from '../../constants/tag-status';
import style from './tag.module.scss';

interface TagProp extends ComponentPropsWithRef<'button'> {
  /**
   * @deprecated
   * @type=TAG_COLOR
   * The color preset to use.
   * DEPRECATED: Use the `status` prop instead, color will be removed in v21.
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
  /**
   * @type=TAG_STATUS
   * The status preset to use.
   */
  status?: TagStatus;
}

const Tag: FC<TagProp> = forwardRef(({
  children,
  className,
  color,
  icon = ICON_NAME.xmark,
  size = TAG_SIZE.md,
  status,
  ...props
}, ref): JSX.Element => {
  if (color) {
    warnDeprecated('Tag.color', '[DEPRECATED]: The color prop of Tag is deprecated and will be removed in v21, use the status prop instead.');
  }

  const tagStatus = status ?? (color === TAG_COLOR.primary ? TAG_STATUS.accent : color) ?? TAG_STATUS.information;

  return (
    <button
      className={ classNames(
        style['tag'],
        style[`tag--${tagStatus}`],
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
