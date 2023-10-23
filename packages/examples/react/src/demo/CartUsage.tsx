import React from 'react';
import {
  OsdsCart,
  OsdsCartFooter,
  OsdsCartFooterItem,
  OsdsCartHeader,
  OsdsCartItem,
  OsdsCartItemOption,
  OsdsCartSection,
  OsdsCartTotal,
} from '@ovhcloud/ods-component-cart-react';

const CartUsage: React.FC = () => (
  <div>
    <OsdsCart>
      <OsdsCartHeader slot="header">
        Header
      </OsdsCartHeader>

      <OsdsCartSection>
        <OsdsCartItem>
          <span slot="subhead">Subhead</span>
          <span slot="title">Title</span>
          <span slot="price">Price</span>
          <span slot="extra">Extra</span>
        </OsdsCartItem>
        <OsdsCartItemOption>
          <span slot="subhead">Subhead</span>
          <span slot="title">Title</span>
          <span slot="price">Price</span>
          <span slot="extra">Extra</span>
        </OsdsCartItemOption>
      </OsdsCartSection>

      <OsdsCartFooter>
        <OsdsCartFooterItem>
          <span slot="subhead">Subhead</span>
          <span slot="title">Title</span>
          <span slot="price">Price</span>
          <span slot="extra">Extra</span>
        </OsdsCartFooterItem>
        <OsdsCartTotal>
          <span slot="total">Total</span>
          <span slot="info">Info</span>
          <span slot="price">Price</span>
          <span slot="extra">Extra</span>
        </OsdsCartTotal>
      </OsdsCartFooter>
    </OsdsCart>
  </div>
);

export default CartUsage;
