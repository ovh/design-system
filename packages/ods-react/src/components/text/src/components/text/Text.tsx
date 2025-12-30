import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TEXT_PRESET, type TextPreset } from '../../constants/text-preset';
import { getTag } from '../../controller/text';
import style from './text.module.scss';

// code, hx, p and span share the same global attribute, only label has a specific one ("for")
// so we extends this one for now, could be optimized in the future
interface TextProp extends ComponentPropsWithRef<'label'> {
  /**
   * Pass a HTML tag you may want to use instead of the preset one.
   * Useful for example to apply heading style to a non-heading element.
   * */
  as?: string,
  /**
   * Whether the text is displayed in a disabled context.
   */
  disabled?: boolean,
  /**
   * The text preset to use.
   */
  preset?: TextPreset,
}

const Text: FC<TextProp> = forwardRef(({
  as,
  children,
  className,
  disabled,
  preset = TEXT_PRESET.paragraph,
  ...props
}, ref): JSX.Element => {
  const Tag = as || getTag(preset) as keyof JSX.IntrinsicElements;

  return (
    // @ts-ignore TODO
    <Tag
      // @ts-ignore TODO
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
});

Text.displayName = 'Text';

export {
  Text,
  type TextProp,
};
