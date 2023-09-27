* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsPaginationAttribute
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

### OdsPaginationEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsPaginationChanged`** | `EventEmitter<OdsPaginationChangedEventDetail>` | ✴️ |  | Emitted when the value has changed|

### OdsPaginationMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`setPageIndex`** | `Promise<void>` | ✴️ |  | set page index on the component|

## Types

### ODS_PAGINATION_SIZE
|  |
|:---:|
| `md` |

## Classes

### OsdsPagination