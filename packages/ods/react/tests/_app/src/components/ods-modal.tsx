import React, { useRef } from 'react';
import { OdsButton, OdsModal, OdsText } from 'ods-components-react';

const Modal = () => {
  const modalRef = useRef<any>(null);

  return (
    <>
      <OdsButton label='Open Modal' onClick={() => {modalRef.current && modalRef.current.open()}}></OdsButton>
      <OdsModal ref={modalRef}>
        <OdsText preset='heading-3'>Lorem ipsum</OdsText>
        <OdsText preset='span'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
        </OdsText>
      </OdsModal>
    </>
  );
};

export default Modal;
