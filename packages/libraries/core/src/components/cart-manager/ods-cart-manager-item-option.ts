export interface OdsCartManagerItemOption {
  subhead?: string;
  title: string;
  price?: number;
  extra?: string;
  vat?: number;
  /** is considered as a product or not */
  product?: boolean;
}
