import ConfigCard, { type ConfigCardProps } from '../ConfigCard';

const defaults: ConfigCardProps = { label: 'Delete', deleteButtonVariant: 'ghost' };

const renderCard = (props?: Partial<ConfigCardProps>) => <ConfigCard { ...defaults } { ...props } />;

function renderOutline(label: string, props: Omit<ConfigCardProps, 'label'> = { deleteButtonVariant: 'outline' }) {
  return <ConfigCard label={ label } { ...props } />;
}

export const cases = [
  renderCard({ deleteButtonColor: 'critical', deleteButtonVariant: 'default' }),
  renderCard({ label: 'primary', deleteButtonVariant: 'outline' }),
  renderOutline('Save', { deleteButtonVariant: 'ghost' }),
];
export const more: Partial<ConfigCardProps>[] = [{ deleteButtonVariant: 'outline' }];
