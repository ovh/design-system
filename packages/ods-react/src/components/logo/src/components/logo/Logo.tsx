import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { LOGO_SIZE, type LogoSize } from '../../constants/logo-size';
import { LOGO_VARIANT, type LogoVariant } from '../../constants/logo-variant';
import { LogoDefault } from '../logo-default/LogoDefault';
import { LogoEmblem } from '../logo-emblem/LogoEmblem';
import style from './logo.module.scss';

interface LogoProp extends ComponentPropsWithRef<'svg'> {
  /**
   * The size preset to use.
   */
  size?: LogoSize,
  /**
   * The variant preset to use.
   */
  variant?: LogoVariant,
}

const Logo: FC<LogoProp> = forwardRef(({
  className,
  size = LOGO_SIZE.md,
  variant = LOGO_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  const Component = variant === LOGO_VARIANT.default ? LogoDefault : LogoEmblem;

  return (
    <Component
      className={ classNames(
        style['logo'],
        style[`logo--${size}`],
        className,
      )}
      data-ods="logo"
      ref={ ref }
      { ...props }>
    </Component>
  );
});

Logo.displayName = 'Logo';

export {
  Logo,
  type LogoProp,
};
