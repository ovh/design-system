* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsTabsAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ | ✴️ |  | The tab is contrasted|
|**`panel`** | _string_ | ✴️ |  | Tabs active panel|
|**`size`** | `md` | ✴️ |  | Tabs size|

### OdsTabsChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`panel`** | _string_ | ✴️ |  | |

### OdsTabsEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsTabsChanged`** | `EventEmitter<OdsTabsChangeEventDetail>` | ✴️ |  | The selected tab changed|

## Types

### ODS_TABS_SIZE
|  |
|:---:|
| `md` |

## Classes

### OsdsTabs
_Main tabs component_
