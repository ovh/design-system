import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, type MouseEvent, forwardRef, useCallback } from 'react';
import { Icon } from '../../../../icon/src';
import { TAG_COLOR, type TagColor } from '../../constants/tag-color';
import { TAG_SIZE, type TagSize } from '../../constants/tag-size';
import style from './Tag.module.scss';

interface TagRemoveEventDetail {
  id?: string;
}

type TagRemoveEvent = CustomEvent<TagRemoveEventDetail>;

interface TagProp extends ComponentPropsWithRef<'div'> {
  color?: TagColor;
  disabled?: boolean;
  size?: TagSize;
  onRemove?: () => TagRemoveEventDetail;
}

const Tag: FC<TagProp> = forwardRef(({
  children,
  className,
  color = TAG_COLOR.information,
  disabled = false,
  size = TAG_SIZE.md,
  onRemove,
  ...props
}, ref): JSX.Element => {

  const handleCloseClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!disabled && onRemove) {
      onRemove();
    }
  }, [disabled, onRemove]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    // Prevent space key from scrolling the page
    if (event.key === ' ') {
      event.preventDefault();
    }
  }, []);

  const handleKeyUp = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === ' ' || event.key === 'Enter') && !disabled && onRemove) {
      onRemove();
    }
  }, [disabled, onRemove]);

  return (
    <div
      className={ classNames(
        style['ods-tag'],
        style[`ods-tag--${color}`],
        style[`ods-tag--${size}`],
        { [style['ods-tag--disabled']]: disabled },
        className,
      )}
      onClick={ handleCloseClick }
      onKeyDown={ handleKeyDown }
      onKeyUp={ handleKeyUp }
      ref={ ref }
      role="tag"
      tabIndex={ disabled ? -1 : 0 }
      {...props}
    >
      { children }
      <Icon
        className={style['ods-tag__close']}
        name="xmark"
        role="button"
        tabIndex={disabled ? -1 : 0}
      />
    </div>
  );
});

Tag.displayName = 'Tag';

export {
  Tag,
  type TagRemoveEvent,
  type TagRemoveEventDetail,
  type TagProp,
};
