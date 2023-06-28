import { OdsCartManagerAttributes } from '@ovhcloud/ods-core';

/**
 * base attributes value of cart manager
 */
export const odsCartManagerBaseAttributes: OdsCartManagerAttributes = {
  inline: false,
  footer: { items: [] },
  i18n: undefined,
  period: undefined, size: undefined,
  sections: [],
  vatMode: false,
};
