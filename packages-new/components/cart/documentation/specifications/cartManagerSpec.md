* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

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

## Classes

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



## Type alias

### OdsCartManager

interface description of all implementation of `ods-cart-manager`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCartManagerAttributes

> _Based on `OdsComponentAttributes`_

### OdsCartManagerEvents

> _Based on `OdsComponentEvents`_

### OdsCartManagerMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsCartManagerDefaultAttributes
`OdsCartManagerAttributes`