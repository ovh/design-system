import { BUTTON_EMPHASIS } from '@ovhcloud/ods-react';
import { Button, ActionsMenu } from '@/components';
import { ButtonLink } from '@/components/button-link/ButtonLink';
import ConfigCard from '../components/card/ConfigCard';

export function Page({ busy }: { busy: boolean }) {
  return (
    <>
      <Button color="brand" variant="medium">Refresh</Button>
      <Button color={ busy ? 'critical' : 'brand' } variant={ 'low' }>Cancel</Button>
      <Button /* TODO(ods-v20): 'information' (ButtonColor) has no v20 equivalent: a Button shows no status in v20: pick `status` brand, neutral or critical (brand is the default), and show the status with a Badge or a Message next to it */ color="information">Info</Button>
      <ButtonLink to=".." variant="low" />
      <ActionsMenu label="Actions" actionButton={ { emphasis: 'low' } } />
      <ActionsMenu label="More" actionButton={ { emphasis: BUTTON_EMPHASIS.low } } />
      <ConfigCard label="Delete" deleteButtonColor="critical" deleteButtonVariant="high" />
    </>
  );
}
