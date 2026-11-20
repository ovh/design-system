import { useState } from 'react';
import { Cart, CartProductGroup, CartProductGroupItem, CartTotal } from '../../src';

export default {
  component: Cart,
  title: 'Tests accessibility',
};

export const AnnouncedTotal = () => {
  const [hasBackup, setHasBackup] = useState(true);

  return (
    <Cart>
      <CartProductGroup
        label="VPS Starter"
        open
        price="10 €">
        {
          hasBackup &&
          <CartProductGroupItem
            label="Backup option"
            onRemove={ () => setHasBackup(false) }
            price="2 €" />
        }
      </CartProductGroup>

      <CartTotal
        label="Total"
        price={ hasBackup ? '12 €' : '10 €' }
        priceDetails="ex. VAT / month" />
    </Cart>
  );
};

export const RemoveButtons = () => (
  <Cart locale="fr">
    <CartProductGroup
      label="VPS Starter"
      onRemove={ () => {} }
      open
      price="10 €">
      <CartProductGroupItem
        label="Backup option"
        onRemove={ () => {} }
        price="2 €" />

      <CartProductGroupItem
        label={ <strong>Extra IP</strong> }
        onRemove={ () => {} }
        price="3 €" />
    </CartProductGroup>
  </Cart>
);
