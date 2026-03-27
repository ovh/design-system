import classNames from 'classnames';
import { type ComponentPropsWithRef, type ComponentPropsWithoutRef, type FC, type JSX, forwardRef } from 'react';
import { TEXT_PRESET, type TextPreset } from '../../constants/text-preset';
import { getTag } from '../../controller/text';
import style from './text.module.scss';

type AsTag = keyof JSX.IntrinsicElements;

type TextProp<T extends AsTag = 'label'> = {
  /**
   * @type=string
   * Pass a HTML tag you may want to use instead of the preset one.
   * Useful for example to apply heading style to a non-heading element.
   * */
  as?: T,
  /**
   * Whether the text is displayed in a disabled context.
   */
  disabled?: boolean,
  /**
   * The text preset to use.
   */
  preset?: TextPreset,
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

type PolymorphicRef<T extends AsTag> = ComponentPropsWithRef<T>['ref'];

const Text = forwardRef(function Inner<T extends AsTag = 'label'>({
  as,
  children,
  className,
  disabled,
  preset = TEXT_PRESET.paragraph,
  ...props
}: TextProp<T>, ref: PolymorphicRef<T>) {
  const Tag = as || getTag(preset);

  return (
    <Tag
      className={ classNames(
        style['text'],
        style[`text--${preset}`],
        { [style['text--disabled']]: disabled },
        className,
      )}
      data-ods="text"
      ref={ ref }
      { ...props }>
      { children }
    </Tag>
  );
}) as <T extends AsTag = 'label'>(
  props: TextProp<T> & { ref?: PolymorphicRef<T> },
) => JSX.Element;

(Text as FC).displayName = 'Text';

export {
  Text,
  type TextProp,
};
