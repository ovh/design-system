import type { OdsCartManagerFooter, OdsCartManagerFooterItem, OdsCartManagerTotal } from '../interfaces/attributes';
import type { Unknown } from '@ovhcloud/ods-common-core';


function isOdsCartManagerFooter(footer?: Unknown<OdsCartManagerFooter>): footer is OdsCartManagerFooter {
  return !!footer
    && !!footer.items
    && Array.isArray((footer.items))
    && footer.items.every((item) => isOdsCartManagerFooterItem(item) || isOdsCartTotal(item));
}

function isOdsCartManagerFooterItem(footerItem?: Unknown<OdsCartManagerFooterItem>): footerItem is OdsCartManagerFooterItem {
  return !!footerItem && !!footerItem.title && typeof footerItem.title === 'string';
}

function isOdsCartTotal(cartTotal?: Unknown<OdsCartManagerTotal>): cartTotal is OdsCartManagerTotal {
  return !!cartTotal && !!cartTotal.total && typeof cartTotal.total === 'string';
}

export {
  isOdsCartManagerFooter,
  isOdsCartManagerFooterItem,
};
