import { OdsCartManagerItem, OdsCartManagerItemOption, OdsCartManagerSection } from '@ovhcloud/ods-core';

export const odsCartItemA: OdsCartManagerItem = { title: 'item 1', price: 3000, vat: 300 };
export const odsCartItemOptionA: OdsCartManagerItemOption = { title: 'option 1', price: 1000, vat: 200};

export const odsCartSectionA: OdsCartManagerSection = { item: odsCartItemA, options: [odsCartItemOptionA] };

export const odsCartSectionsA: OdsCartManagerSection[] = [
  odsCartSectionA
]


