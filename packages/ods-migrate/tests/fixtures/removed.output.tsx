import { Divider, Modal, ModalBody, ModalContent, SPINNER_SIZE, Spinner } from '@ovhcloud/ods-react';

type LoaderProp = { color?: 'neutral' | 'primary' };

export const Example = ({ isCritical, tone }: { isCritical: boolean, tone: 'neutral' | 'primary' }) => (
  <>
    <Divider />
    <Divider />
    <Spinner size={ SPINNER_SIZE.sm } />
    <Spinner />
    <Spinner /* TODO(ods-v20): <Spinner color={…}> is removed in v20 and its value is computed at runtime: the v20 Spinner has a single default color: delete the prop, or set `--ods-spinner-color: var(--ods-semantic-color-content-neutral)` through a `className` to keep the v19 neutral color */ color={ tone } />
    <Modal>
      <ModalContent role="alertdialog" dismissible={ false }>
        <ModalBody>Delete?</ModalBody>
      </ModalContent>
    </Modal>
    <Modal>
      <ModalContent role="alertdialog"><ModalBody>Kept role</ModalBody></ModalContent>
    </Modal>
    <Modal>
      <ModalContent role={ isCritical ? 'alertdialog' : undefined }><ModalBody>Computed</ModalBody></ModalContent>
    </Modal>
  </>
);

export type { LoaderProp };
