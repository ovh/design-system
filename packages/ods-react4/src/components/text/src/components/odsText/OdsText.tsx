import classNames from 'classnames';
import { type FC, type HTMLAttributes, type JSX, type ReactNode } from 'react';
import { ODS_TEXT_PRESET, type OdsTextPreset } from '../../constants/text-preset';
import style from './odsText.module.scss';

// TODO put back part?
// TODO test controller unit test
// TODO remove vite config on component root?

type OdsTextProp = Partial<HTMLAttributes<HTMLElement>> & {
  children: ReactNode,
  preset?: OdsTextPreset,
};

// TODO better than HTMLAttributes but need to see how to extend all possible tags
// interface OdsTextProp extends ComponentPropsWithoutRef<'??'> {
//   children: ReactNode,
//   preset?: OdsTextPreset,
// }

function getTag(preset: OdsTextPreset): string {
  switch (preset) {
    case ODS_TEXT_PRESET.paragraph:
      return 'p';
    case ODS_TEXT_PRESET.caption:
      return 'span';
    case ODS_TEXT_PRESET.code:
      return 'code';
    case ODS_TEXT_PRESET.span:
      return 'span';
    case ODS_TEXT_PRESET.heading1:
      return 'h1';
    case ODS_TEXT_PRESET.heading2:
      return 'h2';
    case ODS_TEXT_PRESET.heading3:
      return 'h3';
    case ODS_TEXT_PRESET.heading4:
      return 'h4';
    case ODS_TEXT_PRESET.heading5:
      return 'h5';
    case ODS_TEXT_PRESET.heading6:
      return 'h6';
    default:
      return 'p';
  }
}

const OdsText: FC<OdsTextProp> = ({
  children,
  className,
  preset = ODS_TEXT_PRESET.paragraph,
  ...props
}): JSX.Element => {
  const Tag = getTag(preset) as keyof JSX.IntrinsicElements;

  return (
    // @ts-ignore
    <Tag
      className={ classNames(style['ods-text'], style[`ods-text--${preset}`], className) }
      { ...props }>
      { children }
    </Tag>
  );
}

export {
  OdsText,
  type OdsTextProp,
};
