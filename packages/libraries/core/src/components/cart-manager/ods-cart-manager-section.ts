import { OdsCartManagerItem } from './ods-cart-manager-item';
import { OdsCartManagerItemOption } from './ods-cart-manager-item-option';

export interface OdsCartManagerSection {
  item: OdsCartManagerItem;
  options: OdsCartManagerItemOption[];
}
