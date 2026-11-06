import { Button, type ButtonColor, type ButtonVariant } from '@ovhcloud/ods-react';

export interface ConfigCardProps {
  label: string;
  deleteButtonColor?: ButtonColor;
  deleteButtonVariant?: ButtonVariant | undefined;
}

const ConfigCard = ({ label, deleteButtonColor, deleteButtonVariant }: ConfigCardProps) => (
  <Button color={ deleteButtonColor } variant={ deleteButtonVariant }>{ label }</Button>
);

export default ConfigCard;
