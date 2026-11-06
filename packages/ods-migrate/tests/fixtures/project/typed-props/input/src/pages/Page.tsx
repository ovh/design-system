import { BUTTON_VARIANT } from '@ovhcloud/ods-react';
import { Button, ActionsMenu } from '@/components';
import { ButtonLink } from '@/components/button-link/ButtonLink';
import ConfigCard from '../components/card/ConfigCard';

export function Page({ busy }: { busy: boolean }) {
  return (
    <>
      <Button color="primary" variant="outline">Refresh</Button>
      <Button color={ busy ? 'critical' : 'primary' } variant={ 'ghost' }>Cancel</Button>
      <Button color="information">Info</Button>
      <ButtonLink to=".." variant="ghost" />
      <ActionsMenu label="Actions" actionButton={ { variant: 'ghost' } } />
      <ActionsMenu label="More" actionButton={ { variant: BUTTON_VARIANT.ghost } } />
      <ConfigCard label="Delete" deleteButtonColor="critical" deleteButtonVariant="default" />
    </>
  );
}
