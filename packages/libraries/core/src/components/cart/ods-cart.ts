import { OdsCartBehavior } from './ods-cart-behavior';
import { OdsCartAttributes } from './ods-cart-attributes';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCartMethods } from './ods-cart-methods';
import { OdsCartEvents } from './ods-cart-events';
import { OdsCartController } from './ods-cart-controller';

/**
 * interface description of all implementation of `ods-cart`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCart<ComponentMethods extends OdsComponentGenericMethods<OdsCartMethods> = OdsComponentGenericMethods<OdsCartMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartEvents> = OdsComponentGenericEvents<OdsCartEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartAttributes, OdsCartController, OdsCartBehavior>;
