import { Unknown } from '../../types/unknown';

export interface OdsCartManagerTotal {
  /** total amount to display */
  total: string;
  /** complementary information */
  info?: string;
  /** price to display excluding VAT */
  price?: number;
  /** amount of the VAT */
  vat?: number;
  /** extra information */
  extra?: string;
}

/**
 * type guard of OdsCartTotal that check at runtime the object
 * @param cartTotal - object possibly of OdsCartTotal type
 */
export function isOdsCartTotal(cartTotal?: Unknown<OdsCartManagerTotal>): cartTotal is OdsCartManagerTotal {
  return !!cartTotal && !!cartTotal.total && typeof cartTotal.total === 'string';
}


