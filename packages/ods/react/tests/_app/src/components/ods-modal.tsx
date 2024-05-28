import React from 'react-dom/client';
import { OdsModal, OdsText } from 'ods-components-react';

const Modal = () => {
  return (
    <OdsModal isOpen>
      <OdsText preset={'heading-3'}>Lorem ipsum</OdsText>
      <OdsText preset={'span'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
      </OdsText>
    </OdsModal>
  );
};

export default Modal;
