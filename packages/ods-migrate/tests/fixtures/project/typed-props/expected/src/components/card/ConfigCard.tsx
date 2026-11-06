import { Button, type ButtonStatus, type ButtonEmphasis } from '@ovhcloud/ods-react';

export interface ConfigCardProps {
  label: string;
  deleteButtonColor?: ButtonStatus;
  deleteButtonVariant?: ButtonEmphasis | undefined;
}

const ConfigCard = ({ label, deleteButtonColor, deleteButtonVariant }: ConfigCardProps) => (
  <Button status={ deleteButtonColor } emphasis={ deleteButtonVariant }>{ label }</Button>
);

export default ConfigCard;
