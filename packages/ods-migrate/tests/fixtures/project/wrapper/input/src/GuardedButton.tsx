import { forwardRef } from 'react';
import { Button, type ButtonProp } from './ods';

export type DisableCondition = { when: boolean };

interface GuardedButtonProps extends ButtonProp {
  conditions?: DisableCondition[];
}

export const GuardedButton = forwardRef<HTMLButtonElement, GuardedButtonProps>(({ conditions = [], ...buttonProps }, ref) => (
  <Button ref={ ref } { ...buttonProps } disabled={ conditions.some((c) => c.when) } />
));
