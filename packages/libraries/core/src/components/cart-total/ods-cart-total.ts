import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCartTotalMethods } from './ods-cart-total-methods';
import { OdsCartTotalAttributes } from './ods-cart-total-attributes';
import { OdsCartTotalController } from './ods-cart-total-controller';
import { OdsCartTotalEvents } from './ods-cart-total-events';

/**
 * interface description of all implementation of `ods-cart-total`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartTotal<ComponentMethods extends OdsComponentGenericMethods<OdsCartTotalMethods> = OdsComponentGenericMethods<OdsCartTotalMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartTotalEvents> = OdsComponentGenericEvents<OdsCartTotalEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartTotalAttributes, OdsCartTotalController>;
