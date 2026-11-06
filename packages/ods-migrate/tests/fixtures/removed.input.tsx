import { DIVIDER_COLOR, Divider, MODAL_COLOR, Modal, ModalBody, ModalContent, SPINNER_COLOR, SPINNER_SIZE, Spinner, type SpinnerColor } from '@ovhcloud/ods-react';

type LoaderProp = { color?: SpinnerColor };

export const Example = ({ isCritical, tone }: { isCritical: boolean, tone: SpinnerColor }) => (
  <>
    <Divider color={ DIVIDER_COLOR.primary } />
    <Divider color="neutral" />
    <Spinner color={ SPINNER_COLOR.primary } size={ SPINNER_SIZE.sm } />
    <Spinner color={ SPINNER_COLOR['neutral'] } />
    <Spinner color={ tone } />
    <Modal>
      <ModalContent color={ MODAL_COLOR.critical } dismissible={ false }>
        <ModalBody>Delete?</ModalBody>
      </ModalContent>
    </Modal>
    <Modal>
      <ModalContent color="information" role="alertdialog"><ModalBody>Kept role</ModalBody></ModalContent>
    </Modal>
    <Modal>
      <ModalContent color={ isCritical ? MODAL_COLOR.critical : MODAL_COLOR.neutral }><ModalBody>Computed</ModalBody></ModalContent>
    </Modal>
  </>
);

export type { LoaderProp };
