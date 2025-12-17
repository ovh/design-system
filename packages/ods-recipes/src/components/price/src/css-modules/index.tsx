import { type JSX } from 'react';
import style from './index.module.scss';

function formatPrice(value: number, locale = 'fr-FR', currency = 'EUR'): string {
  return new Intl.NumberFormat(locale, { currency, style: 'currency' }).format(value);
}

const Price = (): JSX.Element => {
  return (
    <div className={ style['price'] }>
      <span className={ style['price__title'] }>
        Starting at
      </span>

      <span className={ style['price__value'] }>
        { formatPrice(44.90) }
      </span>

      <span className={ style['price__info'] }>
        ex. VAT/month
      </span>

      <span className={ style['price__info'] }>
        or { formatPrice(53.88) } incl. VAT/month
      </span>

      <span className={ style['price__info'] }>
        No commitment
      </span>
    </div>
  );
};

export {
  Price,
};
