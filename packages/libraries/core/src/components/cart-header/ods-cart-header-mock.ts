import { OdsCart } from '../cart/ods-cart';
import { OdsCartHeader } from "./ods-cart-header";
import { OdsCartHeaderController } from "./ods-cart-header-controller";
import { OdsCartHeaderEvents } from "./ods-cart-header-events";
import { OdsCartHeaderMethods } from "./ods-cart-header-methods";

export class OdsCartHeaderMock implements OdsCartHeader<OdsCartHeaderMethods, OdsCartHeaderEvents> {
  headerTitle?: string;

  el!: HTMLElement;
  cart: (HTMLElement & OdsCart) | null = null;

  controller: OdsCartHeaderController = jest.fn() as unknown as OdsCartHeaderController;

  beforeInit = jest.fn();
  refresh = jest.fn().mockImplementation(() => Promise.resolve());
}
