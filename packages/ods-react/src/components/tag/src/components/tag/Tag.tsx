import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { TAG_COLOR, type TagColor } from '../../constants/tag-color';
import { TAG_SIZE, type TagSize } from '../../constants/tag-size';
import style from './tag.module.scss';

interface TagProp extends ComponentPropsWithRef<'button'> {
  color?: TagColor;
  size?: TagSize;
}

const Tag: FC<TagProp> = forwardRef(({
  children,
  className,
  color = TAG_COLOR.information,
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
      ref={ ref }
      {...props}
    >
      { children }
      <Icon
        className={style['tag__close']}
        name={ICON_NAME.xmark}
      />
    </button>
  );
});

Tag.displayName = 'Tag';

export {
  Tag,
  type TagProp,
};
