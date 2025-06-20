import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TEXT_PRESET, type TextPreset } from '../../constants/text-preset';
import { getTag } from '../../controller/text';
import style from './text.module.scss';

// code, hx, p and span share the same global attribute, only label has a specific one ("for")
// so we extends this one for now, could be optimized in the future
interface TextProp extends ComponentPropsWithRef<'label'> {
  /**
   * The text preset to use.
   */
  preset?: TextPreset,
}

const Text: FC<TextProp> = forwardRef(({
  children,
  className,
  preset = TEXT_PRESET.paragraph,
  ...props
}, ref): JSX.Element => {
  const Tag = getTag(preset) as keyof JSX.IntrinsicElements;

  return (
    // @ts-ignore TODO
    <Tag
      // @ts-ignore TODO
      className={ classNames(style['text'], style[`text--${preset}`], className) }
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
