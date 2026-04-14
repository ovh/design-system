import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import React, { type ComponentPropsWithRef, type CSSProperties, type FC, type JSX, forwardRef } from 'react';

const ResetTheme: FC<ComponentPropsWithRef<'div'>> = forwardRef(({
  children,
  className,
  style = {},
  ...props
}, ref): JSX.Element => {
  return (
    <div
      className={ className }
      ref={ ref }
      {...props }
      style={{
        ...lightThemeTokens.root as CSSProperties,
        backgroundColor: 'var(--ods-theme-background-color)',
        color: 'var(--ods-theme-text-color)',
        ...style,
      }}>
      { children }
    </div>
  );
});

export {
  ResetTheme,
};
