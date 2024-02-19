* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsPaginationAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`defaultCurrentPage`** | _number_ | ✴️ |  | Its corresponding current page.|
|**`defaultItemsPerPage`** | `ODS_PAGINATION_PER_PAGE` | ✴️ |  | Default items per page.|
|**`disabled`** | _boolean_ | ✴️ |  | indicates if the pagination is entirely disabled.it means no interactions (hover, click, focus, etc)|
|**`labelTooltipNext`** | _string_ | ✴️ |  | The label of the tooltip on the arrow next|
|**`labelTooltipPrevious`** | _string_ | ✴️ |  | The label of the tooltip on the arrow previous|
|**`totalItems`** | _number_ |  |  | The total number of items.|
|**`totalPages`** | _number_ | ✴️ |  | The total amount of pages.|

### OdsPaginationChangedEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`current`** | _number_ | ✴️ |  | |
|**`itemPerPage`** | _number_ | ✴️ |  | |
|**`oldCurrent`** | _number_ |  |  | |

### OdsPaginationEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsPaginationChanged`** | `EventEmitter<OdsPaginationChangedEventDetail>` | ✴️ |  | Emitted when the value has changed|
|**`odsPaginationItemPerPageChanged`** | `EventEmitter<OdsPaginationItemPerPageChangedEventDetail>` | ✴️ |  | Emitted when the number of items per page value has changed|

### OdsPaginationItemPerPageChangedEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`current`** | _number_ | ✴️ |  | |
|**`currentPage`** | _number_ | ✴️ |  | |
|**`totalPages`** | _number_ | ✴️ |  | |

### OdsPaginationMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`setPageIndex`** | `Promise<void>` | ✴️ |  | set page index on the component|

## Types

### ODS_PAGINATION_SIZE
|  |
|:---:|
| `md` |