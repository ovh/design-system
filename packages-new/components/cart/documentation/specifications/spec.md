* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsCartAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`collapsed`** | _boolean_ |  |  | is the cart is collapsed (if collapsible)|
|**`collapsible`** | _boolean_ |  |  | is the cart can be collapsed in a smaller view|
|**`flex`** | _boolean_ |  |  | full width or not: see component principles|
|**`rounded`** | `OdsCartRounded` |  |  | rounds corners of cart's outer border edge|
|**`size`** | `sm` |  |  | size: see component principles|

### OdsCartHeaderAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`headerTitle`** | _string_ |  |  | |

### OdsCartHeaderMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`refresh`** | _void_ | ✴️ |  | Render manually the cart header in order to refresh the component.|

### OdsCartManagerAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`flex`** | _boolean_ |  |  | full width or not: see component principles|
|**`footer`** | `OdsCartManagerFooter` |  |  | describe what the footer is made of|
|**`i18n`** | `OdsI18nHook` |  |  | internationalisation system connector|
|**`period`** | `ODS_PERIOD_ISO_CODE` |  |  | ISO period code that describe the duration of a periodical payment|
|**`sections`** | _unknown_ | ✴️ |  | Sections made of one item and multiple options|
|**`size`** | `sm` |  |  | size: see component principles|
|**`vatMode`** | _boolean_ |  |  | is the cart display the Value Added Tax|

### OdsCartManagerBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsI18n`** | `OdsI18n` | ✴️ |  | Ods I18n module|

### OdsCartManagerFooter
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`items`** | _unknown_ | ✴️ |  | |

### OdsCartManagerFooterItem
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`extra`** | _string_ |  |  | extra information|
|**`price`** | _number_ | ✴️ |  | amount without VAT included|
|**`subhead`** | _string_ |  |  | complementary information|
|**`title`** | _string_ | ✴️ |  | |
|**`vat`** | _number_ |  |  | VAT amount|

### OdsCartManagerItem
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`extra`** | _string_ |  |  | |
|**`price`** | _number_ | ✴️ |  | |
|**`product`** | _boolean_ |  |  | is considered as a product or not|
|**`subhead`** | _string_ |  |  | |
|**`title`** | _string_ | ✴️ |  | |
|**`vat`** | _number_ |  |  | |

### OdsCartManagerItemOption
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`extra`** | _string_ |  |  | |
|**`price`** | _number_ |  |  | |
|**`product`** | _boolean_ |  |  | is considered as a product or not|
|**`subhead`** | _string_ |  |  | |
|**`title`** | _string_ | ✴️ |  | |
|**`vat`** | _number_ |  |  | |

### OdsCartManagerMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getProductQuantity`** | _number_ | ✴️ |  | get the number of item flagged as product|
|**`getTotalAmount`** | _number_ | ✴️ |  | get the total amount of the cart|

### OdsCartManagerSection
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`item`** | `OdsCartManagerItem` | ✴️ |  | |
|**`options`** | _unknown_ | ✴️ |  | |

### OdsCartManagerTotal
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`extra`** | _string_ |  |  | extra information|
|**`info`** | _string_ |  |  | complementary information|
|**`price`** | _number_ |  |  | price to display excluding VAT|
|**`total`** | _string_ | ✴️ |  | total amount to display|
|**`vat`** | _number_ |  |  | amount of the VAT|

### OdsCartManagerTotalPrice
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`price`** | _number_ | ✴️ |  | |
|**`vat`** | _number_ | ✴️ |  | |

### OdsCartMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getItemQuantity`** | _number_ | ✴️ |  | get the number of cart items detected in the DOM|
|**`refresh`** | _void_ | ✴️ |  | Render manually the cart in order to refresh the component.|

## Types

### OdsCartRounded
|  |
|:---:|
| `all` |
| `none` |
| `top` |

### OdsCartSize
|  |
|:---:|
| `sm` |

## Classes

### OdsCartController
_common controller logic for cart component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **computeItemQuantity**() => _unknown_


> **updateCartHeaderState**() => _unknown_



### OdsCartFooterController
_common controller logic for cart-footer component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsCartFooterItemController
_common controller logic for cart-footer component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsCartHeaderController
_common controller logic for cart-header component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **initCart**() => _unknown_


> **validateHeaderTitle**() => _unknown_



### OdsCartHeaderMock

### OdsCartItemController
_common controller logic for cart-item component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **initCart**() => _unknown_


> **refreshCart**() => _unknown_



### OdsCartItemOptionController
_common controller logic for cart-item-option component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsCartManagerController
_common controller logic for cart-manager component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **getProductQuantity**() => _unknown_


> **getTotalAmount**() => _unknown_


> **validateFooter**() => _unknown_



### OdsCartManagerMock

### OdsCartManagerService
#### Methods
> **getProductQuantity**() => _unknown_


> **getTotalAmount**() => _unknown_



### OdsCartMock

### OdsCartSectionController
_common controller logic for cart-section component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsCartTotalController
_common controller logic for cart-total component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsCart

interface description of all implementation of `ods-cart`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartFooter

interface description of all implementation of `ods-cart-footer`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartFooterItem

interface description of all implementation of `ods-cart-footer-item`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartHeader

interface description of all implementation of `ods-cart-header`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartItem

interface description of all implementation of `ods-cart-item`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartItemOption

interface description of all implementation of `ods-cart-item-option`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartManager

interface description of all implementation of `ods-cart-manager`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartSection

interface description of all implementation of `ods-cart-section`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartTotal

interface description of all implementation of `ods-cart-total`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartEvents

> _Based on `OdsComponentEvents`_

### OdsCartFooterAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartFooterEvents

> _Based on `OdsComponentEvents`_

### OdsCartFooterItemAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartFooterItemEvents

> _Based on `OdsComponentEvents`_

### OdsCartFooterItemMethods

> _Based on `OdsComponentMethods`_

### OdsCartFooterMethods

> _Based on `OdsComponentMethods`_

### OdsCartHeaderAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartHeaderEvents

> _Based on `OdsComponentEvents`_

### OdsCartHeaderMethods

> _Based on `OdsComponentMethods`_

### OdsCartItemAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartItemEvents

> _Based on `OdsComponentEvents`_

### OdsCartItemMethods

> _Based on `OdsComponentMethods`_

### OdsCartItemOptionAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartItemOptionEvents

> _Based on `OdsComponentEvents`_

### OdsCartItemOptionMethods

> _Based on `OdsComponentMethods`_

### OdsCartManagerAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartManagerEvents

> _Based on `OdsComponentEvents`_

### OdsCartManagerMethods

> _Based on `OdsComponentMethods`_

### OdsCartMethods

> _Based on `OdsComponentMethods`_

### OdsCartSectionAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartSectionEvents

> _Based on `OdsComponentEvents`_

### OdsCartSectionMethods

> _Based on `OdsComponentMethods`_

### OdsCartTotalAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartTotalEvents

> _Based on `OdsComponentEvents`_

### OdsCartTotalMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsCartDefaultAttributes
`OdsCartAttributes`

### odsCartFooterDefaultAttributes
`OdsCartFooterAttributes`

### odsCartFooterItemDefaultAttributes
`OdsCartFooterItemAttributes`

### odsCartHeaderDefaultAttributes
`OdsCartHeaderAttributes`

### odsCartItemDefaultAttributes
`OdsCartItemAttributes`

### odsCartItemOptionDefaultAttributes
`OdsCartItemOptionAttributes`

### odsCartManagerDefaultAttributes
`OdsCartManagerAttributes`

### odsCartSectionDefaultAttributes
`OdsCartSectionAttributes`

### odsCartTotalDefaultAttributes
`OdsCartTotalAttributes`