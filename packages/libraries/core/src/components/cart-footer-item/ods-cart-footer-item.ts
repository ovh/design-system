import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCartFooterItemMethods } from './ods-cart-footer-item-methods';
import { OdsCartFooterItemEvents } from './ods-cart-footer-item-events';
import { OdsCartFooterItemAttributes } from './ods-cart-footer-item-attributes';
import { OdsCartFooterItemController } from './ods-cart-footer-item-controller';

/**
 * interface description of all implementation of `ods-cart-footer-item`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartFooterItem<ComponentMethods extends OdsComponentGenericMethods<OdsCartFooterItemMethods> = OdsComponentGenericMethods<OdsCartFooterItemMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartFooterItemEvents> = OdsComponentGenericEvents<OdsCartFooterItemEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartFooterItemAttributes, OdsCartFooterItemController>;
