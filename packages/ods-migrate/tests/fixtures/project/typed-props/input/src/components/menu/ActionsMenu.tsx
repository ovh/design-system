import { FC } from 'react';
import { Button, BUTTON_VARIANT, ButtonProp } from '@ovhcloud/ods-react';

type DeepReadonly<T> = { readonly [K in keyof T]: T[K] };

export type ActionsMenuProps = DeepReadonly<{
  label: string;
  actionButton?: Pick<ButtonProp, 'variant'>;
}>;

export const ActionsMenu: FC<ActionsMenuProps> = ({ label, actionButton }) => (
  <Button variant={ BUTTON_VARIANT.outline } { ...actionButton }>{ label }</Button>
);
