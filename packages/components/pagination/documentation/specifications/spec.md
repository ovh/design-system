* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsPaginationAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`current`** | _number_ | ✴️ |  | Its corresponding current page.|
|**`disabled`** | _boolean_ | ✴️ |  | indicates if the pagination is entirely disabled.it means no interactions (hover, click, focus, etc)|
|**`labelTooltipNext`** | _string_ | ✴️ |  | The label of the tooltip on the arrow next|
|**`labelTooltipPrevious`** | _string_ | ✴️ |  | The label of the tooltip on the arrow previous|
|**`totalItems`** | _number_ |  |  | The total number of items.|
|**`totalPages`** | _number_ | ✴️ |  | The total amount of pages.|

### OdsPaginationChangedEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`current`** | _number_ | ✴️ |  | |
|**`oldCurrent`** | _number_ |  |  | |

### OdsPaginationEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsPaginationChanged`** | `OdsPaginationChangedEventDetail` | ✴️ |  | Emitted when the value has changed|

### OdsPaginationMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`setPageIndex`** | _void_ | ✴️ |  | set page index on the component|

### OdsPaginationPageContent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  | |

## Types

### OdsPaginationSize
|  |
|:---:|
| `md` |

## Classes

### OdsPaginationController
_common controller logic for pagination component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **computeActualTotalPages**() => _unknown_


> **createPageList**() => _unknown_


> **handleNextClick**() => _unknown_


> **handleNextKeyDown**() => _unknown_


> **handlePageClick**() => _unknown_


> **handlePageKeyDown**() => _unknown_


> **handlePreviousClick**() => _unknown_


> **handlePreviousKeyDown**() => _unknown_


> **onKeyDown**() => _unknown_


> **setPageIndex**() => _unknown_



### OdsPaginationMock

## Type alias

### OdsPagination

interface description of all implementation of `ods-pagination`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsPaginationCurrentChangeEvent

> - `OdsPaginationChangedEventDetail`

### OdsPaginationPageList

### OdsPaginationAttributes

> _Based on `OdsComponentAttributes`_

### OdsPaginationEvents

> _Based on `OdsComponentEvents`_

### OdsPaginationMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsPaginationDefaultAttributes
`OdsPaginationAttributes`

### odsPaginationDefaultAttributesDoc
`OdsPaginationAttributes`

### odsPaginationMinPerPageOptions
_unknown_

### odsPaginationPerPageMax
_300_

### odsPaginationPerPageMin
_10_