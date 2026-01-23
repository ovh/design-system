import { Modal, ModalBody, ModalContent, ModalTrigger, Popover, PopoverContent, PopoverTrigger } from '@ovhcloud/ods-react';
import { type ReactElement } from 'react';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';
import style from './app.module.scss';

function App(): ReactElement {
  return (
    <div className={ style.app }>
      <Modal>
        <ModalTrigger>
          Toggle modal
        </ModalTrigger>

        <ModalContent>
          <ModalBody>
            Modal content
          </ModalBody>
        </ModalContent>
      </Modal>

      <Popover open>
        <PopoverTrigger>
          Toggle popover
        </PopoverTrigger>

        <PopoverContent>
          Popover content
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { App };
