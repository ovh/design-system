import lightThemeTokens from '@ovhcloud/ods-themes/default/tokens';
import { type ComponentPropsWithRef, type CSSProperties, type FC, type JSX, forwardRef } from 'react';
import { declaredTokens } from '../helpers/designTokens';

/* Forces the ODS light theme onto a subtree (recipe previews), so the docs
   dark skin doesn't bleed into them — ODS ships no dark theme for demos. */
const ResetTheme: FC<ComponentPropsWithRef<'div'>> = forwardRef(({ children, className, style = {}, ...props }, ref): JSX.Element => (
  <div
    className={ className }
    ref={ ref }
    { ...props }
    style={{
      ...declaredTokens(lightThemeTokens) as CSSProperties,
      backgroundColor: 'var(--ods-semantic-color-surface-page)',
      color: 'var(--ods-semantic-color-content-text)',
      ...style,
    }}>
    { children }
  </div>
));

ResetTheme.displayName = 'ResetTheme';

export { ResetTheme };
