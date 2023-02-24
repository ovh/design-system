import { OdsCartManagerFooter, OdsCartManagerFooterItem, OdsCartManagerTotal } from '@ovhcloud/ods-core';

export const odsCartFooterItemA: OdsCartManagerFooterItem = { title: 'footer item 1', price: 1500 };
export const odsCartTotalA: OdsCartManagerTotal = { total: 'Total', price: 1500 };

export const odsCartFooterA: OdsCartManagerFooter = { items: [odsCartFooterItemA, odsCartTotalA] }


