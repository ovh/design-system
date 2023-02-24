import { OdsCartManagerAttributes } from './ods-cart-manager-attributes';
import { OdsCartManagerBehavior } from './ods-cart-manager-behavior';
import { OdsCartManagerController } from './ods-cart-manager-controller';
import { OdsCartManagerEvents } from './ods-cart-manager-events';
import { OdsCartManagerMethods } from './ods-cart-manager-methods';
import { OdsComponent } from '../ods-component';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponentGenericMethods } from '../ods-component-generic-methods';

/**
 * interface description of all implementation of `ods-cart-manager`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartManager<ComponentMethods extends OdsComponentGenericMethods<OdsCartManagerMethods> = OdsComponentGenericMethods<OdsCartManagerMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartManagerEvents> = OdsComponentGenericEvents<OdsCartManagerEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartManagerAttributes, OdsCartManagerController, OdsCartManagerBehavior>;
