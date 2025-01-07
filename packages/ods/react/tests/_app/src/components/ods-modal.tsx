import React, { useRef } from 'react';
import OdsModal from '@ovhcloud/ods-components-react/ods-modal';

const Modal = () => {
  const modalRef = useRef<any>(null);

  return (
    <>
      <button onClick={ () => { modalRef.current && modalRef.current.open() }}>
        Open Modal
      </button>

      <OdsModal ref={ modalRef }>
        <h3>Lorem ipsum</h3>

        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
        </span>
      </OdsModal>
    </>
  );
};

export default Modal;
