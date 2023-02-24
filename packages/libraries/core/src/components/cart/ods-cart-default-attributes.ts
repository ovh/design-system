import { OdsCartAttributes } from './ods-cart-attributes';
import { OdsCartSize } from './ods-cart-size';
import { OdsCartRounded } from './ods-cart-rounded';

export const odsCartDefaultAttributesDoc = {
  collapsed: false,
  collapsible: false,
  flex: false,
  rounded: OdsCartRounded.all,
  size: OdsCartSize.sm
} as const;

export const odsCartDefaultAttributes = odsCartDefaultAttributesDoc as OdsCartAttributes;
