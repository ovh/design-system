import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { Button as OdsButton, ButtonColor, ButtonSize, ButtonVariant } from '@ovhcloud/ods-react';

type ButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
} & ComponentProps<'button'>;

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  ({ variant = 'default', color = 'primary', size = 'md', children, ...htmlProps }, ref) => (
    <OdsButton variant={ variant } color={ color } size={ size } ref={ ref } { ...htmlProps }>
      { children }
    </OdsButton>
  ),
);
