import type { ButtonColor, ButtonVariant } from '@ovhcloud/ods-react';

type ButtonLinkProps = {
  to: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
};

export function ButtonLink({ to, variant = 'default', color: tone = 'primary' }: ButtonLinkProps) {
  return <a className={ `button-link--${variant} button-link--${tone}` } href={ to } />;
}
