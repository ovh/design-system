/* TODO(ods-v20): MODAL_COLOR: removed in v20, delete it from this import once the places marked below no longer use it */ import { Divider, MODAL_COLOR, Text } from '@ovhcloud/ods-react';
import { Modal } from '@ovh-ux/muk';

export const DeleteModal = () => (
  <Modal type={ /* TODO(ods-v20): MODAL_COLOR has no v20 equivalent: use your own constant, or a boolean such as `isCritical`; if it feeds a prop of a shared component of yours (a `type` of your Modal), change that component once, then the places that use it */ MODAL_COLOR.critical } heading="Delete">
    <Text>Are you sure?</Text>
    <Divider />
  </Modal>
);
