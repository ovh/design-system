import { OdsComponentGenericMethods } from '../ods-component-generic-methods';
import { OdsComponentGenericEvents } from '../ods-component-generic-events';
import { OdsComponent } from '../ods-component';
import { OdsCartFooterMethods } from './ods-cart-footer-methods';
import { OdsCartFooterAttributes } from './ods-cart-footer-attributes';
import { OdsCartFooterController } from './ods-cart-footer-controller';
import { OdsCartFooterEvents } from './ods-cart-footer-events';

/**
 * interface description of all implementation of `ods-cart-footer`.
 * each implementation must have defined events, methods, attributes
 * and one controller for the common behavior logic
 */
export type OdsCartFooter<ComponentMethods extends OdsComponentGenericMethods<OdsCartFooterMethods> = OdsComponentGenericMethods<OdsCartFooterMethods>,
  ComponentEvents extends OdsComponentGenericEvents<OdsCartFooterEvents> = OdsComponentGenericEvents<OdsCartFooterEvents>> =
  OdsComponent<ComponentMethods, ComponentEvents, OdsCartFooterAttributes, OdsCartFooterController>;
