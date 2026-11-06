import { FC } from 'react';
import { Button, ButtonProp } from '@ovhcloud/ods-react';

type DeepReadonly<T> = { readonly [K in keyof T]: T[K] };

export type ActionsMenuProps = DeepReadonly<{
  label: string;
  actionButton?: Pick<ButtonProp, 'emphasis'>;
}>;

export const ActionsMenu: FC<ActionsMenuProps> = ({ label, actionButton }) => (
  <Button { ...actionButton }>{ label }</Button>
);
