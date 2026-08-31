import classNames from 'classnames';
import { type ComponentPropsWithRef, type ElementType, type ForwardedRef, type JSX, forwardRef } from 'react';
import { ICON_NAME, Icon, type IconName } from '../../../../icon/src';
import { TAG_COLOR, type TagColor } from '../../constants/tag-color';
import { TAG_SIZE, type TagSize } from '../../constants/tag-size';
import style from './tag.module.scss';

interface TagProp<T extends ElementType = 'button'> {
  /**
   * \@default-value='button'
   * Pass a component you may want to use as custom Tag component.
   * Useful for example to render the tag as a link, either a plain anchor or the Link
   * component of a routing library.
   * */
  as?: T,
  /**
   * @type=TAG_COLOR
   * The color preset to use.
   */
  color?: TagColor;
  /**
   * The icon to display on the right side.
   * Only rendered when the tag is a button.
   */
  icon?: IconName | null,
  /**
   * The size preset to use.
   */
  size?: TagSize;
}

const TagRoot = forwardRef(function Tag<T extends ElementType>({
  as,
  children,
  className,
  color = TAG_COLOR.information,
  icon = ICON_NAME.xmark,
  size = TAG_SIZE.md,
  ...props
}: TagProp<T> & Omit<ComponentPropsWithRef<T>, keyof TagProp<T>>, ref: ForwardedRef<HTMLButtonElement>): JSX.Element {
  const Component = as || 'button';
  const isButton = Component === 'button';

  return (
    <Component
      className={ classNames(
        style['tag'],
        style[`tag--${color}`],
        style[`tag--${size}`],
        className,
      )}
      data-ods="tag"
      ref={ ref }
      type={ isButton ? 'button' : undefined }
      { ...props }>
      { children }

      {
        isButton && !!icon &&
        <Icon
          className={ style['tag__close'] }
          name={ icon } />
      }
    </Component>
  );
});

TagRoot.displayName = 'Tag';

// `forwardRef` cannot carry a generic through, so its inferred props type accepts anything and
// requires nothing. Restating the signature keeps `as` type safe: the props and the ref of the
// rendered element are enforced at the call site.
const Tag = TagRoot as <T extends ElementType = 'button'>(
  props: TagProp<T> & Omit<ComponentPropsWithRef<T>, keyof TagProp<T>>,
) => JSX.Element;

export {
  Tag,
  type TagProp,
};
