import { Divider, Text } from '@ovhcloud/ods-react';
import { Modal } from '@ovh-ux/muk';

export const DeleteModal = () => (
  <Modal type={ 'critical' } heading="Delete">
    <Text>Are you sure?</Text>
    <Divider />
  </Modal>
);
