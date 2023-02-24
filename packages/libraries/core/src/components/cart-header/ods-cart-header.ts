import { OdsCartHeaderAttributes } from './ods-cart-header-attributes';
import { OdsCartHeaderBehavior } from './ods-cart-header-behavior';
import { OdsCartHeaderController } from './ods-cart-header-controller';
import { OdsCartHeaderEvents } from './ods-cart-header-events';
import { OdsCartHeaderMethods } from './ods-cart-header-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-cart-header`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartHeader<ComponentMethods extends OdsComponentGenericMethods<OdsCartHeaderMethods> = OdsComponentGenericMethods<OdsCartHeaderMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartHeaderEvents> = OdsComponentGenericEvents<OdsCartHeaderEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartHeaderAttributes, OdsCartHeaderController, OdsCartHeaderBehavior>;
