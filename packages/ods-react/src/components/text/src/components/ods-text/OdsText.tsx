import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_TEXT_PRESET, type OdsTextPreset } from '../../constants/text-preset';
import { getTag } from '../../controller/ods-text';
import style from './odsText.module.scss';

// code, hx, p and span share the same global attribute, so we can use any of them here
interface OdsTextProp extends ComponentPropsWithRef<'p'> {
  preset?: OdsTextPreset,
}

const OdsText: FC<OdsTextProp> = forwardRef(({
  children,
  className,
  preset = ODS_TEXT_PRESET.paragraph,
  ...props
}, ref): JSX.Element => {
  const Tag = getTag(preset) as keyof JSX.IntrinsicElements;

  return (
    // @ts-ignore TODO
    <Tag
      // @ts-ignore TODO
      className={ classNames(style['ods-text'], style[`ods-text--${preset}`], className) }
      ref={ ref }
      { ...props }>
      { children }
    </Tag>
  );
});

OdsText.displayName = 'OdsText';

export {
  OdsText,
  type OdsTextProp,
};
