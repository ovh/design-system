import ConfigCard, { type ConfigCardProps } from '../ConfigCard';

const defaults: ConfigCardProps = { label: 'Delete', deleteButtonVariant: 'low' };

const renderCard = (props?: Partial<ConfigCardProps>) => <ConfigCard { ...defaults } { ...props } />;

function renderOutline(label: string, props: Omit<ConfigCardProps, 'label'> = { deleteButtonVariant: 'medium' }) {
  return <ConfigCard label={ label } { ...props } />;
}

export const cases = [
  renderCard({ deleteButtonColor: 'critical', deleteButtonVariant: 'high' }),
  renderCard({ label: 'primary', deleteButtonVariant: 'medium' }),
  renderOutline('Save', { deleteButtonVariant: 'low' }),
];
export const more: Partial<ConfigCardProps>[] = [{ deleteButtonVariant: 'medium' }];
