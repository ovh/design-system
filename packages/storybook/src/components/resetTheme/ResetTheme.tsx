import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import React, { type ComponentPropsWithoutRef, type CSSProperties, type FC, type JSX } from 'react';

const ResetTheme: FC<ComponentPropsWithoutRef<'div'>> = ({
  children,
  style = {},
}): JSX.Element => {
  return (
    <div style={{
      ...lightThemeTokens.root as CSSProperties,
      backgroundColor: 'var(--ods-theme-background-color)',
      color: 'var(--ods-theme-text-color)',
      ...style,
    }}>
      { children }
    </div>
  );
}

export {
  ResetTheme,
};
