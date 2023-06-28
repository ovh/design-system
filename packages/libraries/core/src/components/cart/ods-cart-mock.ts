import { OdsCartHeader } from "../cart-header/ods-cart-header";
import { OdsCart } from "./ods-cart";
import { OdsCartController } from "./ods-cart-controller";
import { OdsCartEvents } from "./ods-cart-events";
import { OdsCartMethods } from "./ods-cart-methods";
import { OdsCartRounded } from "./ods-cart-rounded";
import { OdsCartSize } from "./ods-cart-size";

export class OdsCartMock implements OdsCart<OdsCartMethods, OdsCartEvents> {
    collapsed?: boolean;
    collapsible?: boolean;
    inline?: boolean;
    rounded?: OdsCartRounded;
    size?: OdsCartSize;


    el!: HTMLElement;
    cartHeader: (HTMLElement & OdsCartHeader) | null = null;

    controller: OdsCartController = jest.fn() as unknown as OdsCartController;

    refresh = jest.fn();
    getItemQuantity = jest.fn();
}
