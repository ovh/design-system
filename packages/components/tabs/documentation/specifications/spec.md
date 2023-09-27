* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsTabBarAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`size`** | `md` |  |  | Tabs size|

### OdsTabBarItemAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  | is this tab item is selected or not|
|**`contrasted`** | _boolean_ | ✴️ |  | is in contrasted mode or not|
|**`disabled`** | _boolean_ | ✴️ |  | The tab is disabled or not|
|**`panel`** | _string_ | ✴️ |  | The panel of the corresponding Tab|

### OdsTabBarItemEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsTabItemSelectEvent`** | `EventEmitter<OdsTabItemSelectEventDetail>` | ✴️ |  | Tab Bar item is selected|

### OdsTabItemSelectEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`panel`** | _string_ | ✴️ |  | |
|**`tabItem`** | `OsdsTabBarItem` | ✴️ |  | |

### OdsTabPanelAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  |  is the panel is active or nor|
|**`name`** | _string_ | ✴️ |  | identifier name of the panel|

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

### OsdsTabBar
_assemble different item in a bar_


### OsdsTabBarItem
_An Item that is part of the tab bar_

#### Methods
> **select**() => `Promise<void>`

_select the panel by emitting_



### OsdsTabs
_Main tabs component_


### OsdsTabsPanel
_Panel with content that has to be displayed when active_
