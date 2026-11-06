import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { Button as OdsButton, ButtonStatus, ButtonSize, ButtonEmphasis } from '@ovhcloud/ods-react';

type ButtonProps = {
  variant?: ButtonEmphasis;
  color?: ButtonStatus;
  size?: ButtonSize;
} & ComponentProps<'button'>;

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  ({ variant = 'high', color = 'brand', size = 'md', children, ...htmlProps }, ref) => (
    <OdsButton emphasis={ variant } status={ color } size={ size } ref={ ref } { ...htmlProps }>
      { children }
    </OdsButton>
  ),
);
