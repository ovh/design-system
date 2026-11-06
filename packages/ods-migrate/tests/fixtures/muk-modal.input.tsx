import { DIVIDER_COLOR, Divider, MODAL_COLOR, Text } from '@ovhcloud/ods-react';
import { Modal } from '@ovh-ux/muk';

export const DeleteModal = () => (
  <Modal type={ MODAL_COLOR.critical } heading="Delete">
    <Text>Are you sure?</Text>
    <Divider color={ DIVIDER_COLOR.primary } />
  </Modal>
);
