import { Button, Drawer, DrawerBody, DrawerContent, type DrawerContentProp, type DrawerProp, DrawerTrigger } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = DrawerProp & DrawerContentProp & {
  content?: string;
}

export default (prop: DemoProp) => (
  <Drawer
    closeOnEscape={ prop.closeOnEscape }
    closeOnInteractOutside={ prop.closeOnInteractOutside }>
    <DrawerTrigger asChild>
      <Button>
        Trigger Drawer
      </Button>
    </DrawerTrigger>

    <DrawerContent position={ prop.position }>
      <DrawerBody>
        { prop.content }
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
