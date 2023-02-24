import { OdsCartManagerAttributes } from './ods-cart-manager-attributes';
import { OdsCartSize } from '../cart/ods-cart-size';

export const odsCartManagerDefaultAttributesDoc  = {
  flex: false,
  footer: undefined,
  i18n: undefined,
  period: undefined,
  sections: [],
  size: OdsCartSize.sm,
  vatMode: false,
} as const;

export const odsCartManagerDefaultAttributes = odsCartManagerDefaultAttributesDoc as unknown as OdsCartManagerAttributes;
