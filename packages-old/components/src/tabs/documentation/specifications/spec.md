* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsTabBarAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`size`** | `md` |  |  | Tabs size|

### OdsTabBarItemAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  | is this tab item is selected or not|
|**`contrasted`** | _boolean_ | ✴️ |  | is in contrasted mode or not|
|**`disabled`** | _boolean_ | ✴️ |  | The tab is disabled or not|
|**`panel`** | _string_ | ✴️ |  | The panel of the corresponding Tab|

### OdsTabBarItemEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsTabItemSelectEvent`** | `EventEmitter<OdsTabItemSelectEventDetail>` | ✴️ |  | Tab Bar item is selected|

### OdsTabItemSelectEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`panel`** | _string_ | ✴️ |  | |
|**`tabItem`** | `OsdsTabBarItem` | ✴️ |  | |

### OdsTabPanelAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  |  is the panel active or not|
|**`name`** | _string_ | ✴️ |  | identifier name of the panel|

### OdsTabsAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ | ✴️ |  | The tab is contrasted|
|**`panel`** | _string_ | ✴️ |  | Tabs active panel|
|**`size`** | `md` | ✴️ |  | Tabs size|

### OdsTabsChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`panel`** | _string_ | ✴️ |  | |

### OdsTabsEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsTabsChanged`** | `EventEmitter<OdsTabsChangeEventDetail>` | ✴️ |  | The selected tab changed|

## Types

### ODS_TABS_SIZE
|  |
|:---:|
| `md` |