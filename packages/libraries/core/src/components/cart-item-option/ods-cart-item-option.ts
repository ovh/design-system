import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCartItemOptionAttributes } from './ods-cart-item-option-attributes';
import { OdsCartItemOptionController } from './ods-cart-item-option-controller';
import { OdsCartItemOptionMethods } from './ods-cart-item-option-methods';
import { OdsCartItemOptionEvents } from './ods-cart-item-option-events';

/**
 * interface description of all implementation of `ods-cart-item-option`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartItemOption<ComponentMethods extends OdsComponentGenericMethods<OdsCartItemOptionMethods> = OdsComponentGenericMethods<OdsCartItemOptionMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartItemOptionEvents> = OdsComponentGenericEvents<OdsCartItemOptionEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartItemOptionAttributes, OdsCartItemOptionController>;
