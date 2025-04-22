import { useState } from 'react';
import { Modal, ModalBody, ModalContent, type ModalOpenChangeDetail, ModalTrigger } from '.';
import { ICON_NAME, Icon } from '../../icon/src';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover/src';
import { Select, SelectContent, SelectControl } from '../../select/src';
import style from './dev.module.css';

export default {
  component: Modal,
  title: 'Modal dev',
};

export const Colors = () => (
  <>
    <Modal>
      <ModalTrigger>
        Critical
      </ModalTrigger>

      <ModalContent color="critical">
        <ModalBody>
          Critical
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalTrigger>
        Information
      </ModalTrigger>

      <ModalContent color="information">
        <ModalBody>
          Information
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalTrigger>
        Neutral
      </ModalTrigger>

      <ModalContent color="neutral">
        <ModalBody>
          Neutral
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalTrigger>
        Success
      </ModalTrigger>

      <ModalContent color="success">
        <ModalBody>
          Success
        </ModalBody>
      </ModalContent>
    </Modal>

    <Modal>
      <ModalTrigger>
        Warning
      </ModalTrigger>

      <ModalContent color="warning">
        <ModalBody>
          Warning
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
);

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenChange({ open }: ModalOpenChangeDetail) {
    setIsOpen(open);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={ openModal }>
        Open modal
      </button>

      <Modal
        onOpenChange={ onOpenChange }
        open={ isOpen }>
        <ModalContent>
          <ModalBody>
            Content
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const CustomCSS = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent className={ style['custom-modal-content'] }>
      <ModalBody className={ style['custom-modal-body'] }>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const Default = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const LargeContent = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const NonDismissible = () => (
  <Modal>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent dismissible={ false }>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const NonEscapable = () => (
  <Modal
    closeOnEscape={ false }
    closeOnInteractOutside={ false }>
    <ModalTrigger>
      Trigger
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        Content
      </ModalBody>
    </ModalContent>
  </Modal>
);

export const OverlayElements = () => (
  <Modal>
    <ModalTrigger>
      Trigger Modal
    </ModalTrigger>

    <ModalContent>
      <ModalBody>
        <Select items={[
          { label: 'Dog', value:'dog' },
          { label: 'Cat', value:'cat' },
          { label: 'Hamster', value:'hamster' },
          { label: 'Parrot', value:'parrot' },
          { label: 'Spider', value:'spider' },
          { label: 'Goldfish', value:'goldfish' },
        ]}>
          <SelectControl />

          <SelectContent />
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Icon name={ ICON_NAME.circleQuestion } />
          </PopoverTrigger>

          <PopoverContent>
            This is the popover content
          </PopoverContent>
        </Popover>
      </ModalBody>
    </ModalContent>
  </Modal>
);
