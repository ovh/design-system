* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Classes

### OdsCartItemController
_common controller logic for cart-item component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **initCart**() => _unknown_


> **refreshCart**() => _unknown_



### OdsCartItemOptionController
_common controller logic for cart-item-option component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

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

## Variables

### odsCartItemDefaultAttributes
`OdsCartItemAttributes`

### odsCartItemOptionDefaultAttributes
`OdsCartItemOptionAttributes`