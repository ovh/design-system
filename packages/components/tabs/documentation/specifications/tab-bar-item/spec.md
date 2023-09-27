* [**Interfaces**](#interfaces)
* [**Classes**](#classes)

## Interfaces

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

## Classes

### OsdsTabBarItem
_An Item that is part of the tab bar_

#### Methods
> **select**() => `Promise<void>`

_select the panel by emitting_

