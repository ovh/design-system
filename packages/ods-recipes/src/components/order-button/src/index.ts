import { OrderButton as CssModule, type OrderButtonProp } from './css-modules';
import { type ComponentMetadata, type ComponentRecipe } from '../../../constants/recipe';
import { SEARCH_TAG } from '../../../constants/search-tag';

const metadata: ComponentMetadata = {
  name: 'Order Button',
  reactTag: 'OrderButton',
  tags: [
    SEARCH_TAG.cart,
    SEARCH_TAG.interactive,
  ],
};

const OrderButton: ComponentRecipe<OrderButtonProp> = {
  CssModule,
  Tailwind: () => null,
  metadata,
};

export {
  OrderButton,
};
