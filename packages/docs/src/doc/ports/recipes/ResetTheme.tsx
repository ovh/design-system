import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { type ComponentPropsWithRef, type CSSProperties, type FC, type JSX, forwardRef } from 'react';

/* Forces the ODS light theme onto a subtree (recipe previews), so the docs
   dark skin doesn't bleed into them — ODS ships no dark theme for demos. */
const ResetTheme: FC<ComponentPropsWithRef<'div'>> = forwardRef(({ children, className, style = {}, ...props }, ref): JSX.Element => (
  <div
    className={ className }
    ref={ ref }
    { ...props }
    style={{
      ...lightThemeTokens.root as CSSProperties,
      backgroundColor: 'var(--ods-theme-background-color)',
      color: 'var(--ods-theme-text-color)',
      ...style,
    }}>
    { children }
  </div>
));

ResetTheme.displayName = 'ResetTheme';

export { ResetTheme };
