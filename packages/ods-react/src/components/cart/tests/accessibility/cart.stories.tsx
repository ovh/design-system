import { Cart, CartProductGroup, CartProductGroupItem } from '../../src';

export default {
  component: Cart,
  title: 'Tests accessibility',
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
