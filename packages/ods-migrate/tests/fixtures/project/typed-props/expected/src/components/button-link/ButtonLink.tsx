import type { ButtonStatus, ButtonEmphasis } from '@ovhcloud/ods-react';

type ButtonLinkProps = {
  to: string;
  variant?: ButtonEmphasis;
  color?: ButtonStatus;
};

export function ButtonLink({ to, variant = 'high', color: tone = 'brand' }: ButtonLinkProps) {
  return <a className={ `button-link--${variant} button-link--${tone}` } href={ to } />;
}
