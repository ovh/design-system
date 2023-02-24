import { OdsCartItemAttributes } from './ods-cart-item-attributes';
import { OdsCartItemBehavior } from './ods-cart-item-behavior';
import { OdsCartItemController } from './ods-cart-item-controller';
import { OdsCartItemEvents } from './ods-cart-item-events';
import { OdsCartItemMethods } from './ods-cart-item-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-cart-item`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartItem<ComponentMethods extends OdsComponentGenericMethods<OdsCartItemMethods> = OdsComponentGenericMethods<OdsCartItemMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartItemEvents> = OdsComponentGenericEvents<OdsCartItemEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartItemAttributes, OdsCartItemController, OdsCartItemBehavior>;
