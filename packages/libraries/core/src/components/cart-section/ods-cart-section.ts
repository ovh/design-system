import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCartSectionAttributes } from './ods-cart-section-attributes';
import { OdsCartSectionController } from './ods-cart-section-controller';
import { OdsCartSectionEvents } from './ods-cart-section-events';
import { OdsCartSectionMethods } from './ods-cart-section-methods';


/**
 * interface description of all implementation of `ods-cart-section`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartSection<ComponentMethods extends OdsComponentGenericMethods<OdsCartSectionMethods> = OdsComponentGenericMethods<OdsCartSectionMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartSectionEvents> = OdsComponentGenericEvents<OdsCartSectionEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartSectionAttributes, OdsCartSectionController>;
