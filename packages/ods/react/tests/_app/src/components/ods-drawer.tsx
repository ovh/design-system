import React, { useRef } from 'react';
import { OdsButton, OdsDrawer, OdsText } from 'ods-components-react';

const Drawer = () => {
  const drawerRef = useRef<any>(null);

  const toggleDrawer = () => {
    if (drawerRef.current.isOpen) {
      drawerRef.current.close()
    } else {
      drawerRef.current.open()
    }
  }

  return (
    <>
      <OdsButton label='Toggle drawer' onClick={toggleDrawer}></OdsButton>
      <OdsDrawer ref={drawerRef} position='right'>
        <OdsText preset='heading-3'>Lorem ipsum</OdsText>
        <OdsText preset='span'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, nunc nec ultricies ultricies, nunc nunc ultricies
        </OdsText>
      </OdsDrawer>
    </>
  );
};

export default Drawer;
