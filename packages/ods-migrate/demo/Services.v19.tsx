import { type ReactElement, useState } from 'react';
import {
  BADGE_COLOR,
  Badge,
  type BadgeColor,
  BUTTON_COLOR,
  Button,
  Card,
  DIVIDER_COLOR,
  Divider,
  MESSAGE_COLOR,
  Message,
  MessageBody,
  Modal,
  ModalBody,
  ModalContent,
  MODAL_COLOR,
  SPINNER_COLOR,
  Spinner,
  TAG_COLOR,
  Tag,
  Text,
  Toaster,
  toast,
} from '@ovhcloud/ods-react';

type ServiceState = 'active' | 'expiring' | 'suspended';

interface Service {
  name: string,
  state: ServiceState,
  tags: string[],
}

// The ODS v19 API, as an integrator app uses it before the v20 migration.
const STATE_COLORS: Record<ServiceState, BadgeColor> = {
  active: 'success',
  expiring: 'warning',
  suspended: 'primary',
};

const SERVICES: Service[] = [
  { name: 'vps-1a2b3c.vps.ovh.net', state: 'active', tags: ['production'] },
  { name: 'my-shop.example.com', state: 'expiring', tags: ['web', 'production'] },
  { name: 'backup-storage-01', state: 'suspended', tags: ['backup'] },
];

function Services(): ReactElement {
  const [toDelete, setToDelete] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function renew(service: Service): void {
    setIsLoading(true);
    toast.primary(`Renewal of ${service.name} requested`);
    setTimeout(() => setIsLoading(false), 1000);
  }

  return (
    <section>
      <Text preset="heading-2">My services</Text>

      <Message color={ MESSAGE_COLOR.warning }>
        <MessageBody>One of your services expires in 7 days.</MessageBody>
      </Message>

      { SERVICES.map((service) => (
        <Card color="primary" key={ service.name }>
          <Text preset="heading-4">{ service.name }</Text>
          <Badge color={ STATE_COLORS[service.state] }>{ service.state }</Badge>
          { service.tags.map((tag) => (
            <Tag color={ tag === 'production' ? TAG_COLOR.primary : TAG_COLOR.neutral } key={ tag }>{ tag }</Tag>
          )) }

          <Divider color={ DIVIDER_COLOR.primary } />

          <Button color={ BUTTON_COLOR.primary } onClick={ () => renew(service) }>Renew</Button>
          <Button color={ BUTTON_COLOR.success }>Upgrade</Button>
          <Button color="critical" onClick={ () => setToDelete(service) }>Delete</Button>
        </Card>
      )) }

      { isLoading && <Spinner color={ SPINNER_COLOR.neutral } /> }

      <Badge color={ BADGE_COLOR.primary }>New offers available</Badge>

      <Modal onOpenChange={ () => setToDelete(null) } open={ !!toDelete }>
        <ModalContent color={ MODAL_COLOR.critical }>
          <ModalBody>Delete { toDelete?.name }? This cannot be undone.</ModalBody>
        </ModalContent>
      </Modal>

      <Toaster />
    </section>
  );
}

export { Services };
