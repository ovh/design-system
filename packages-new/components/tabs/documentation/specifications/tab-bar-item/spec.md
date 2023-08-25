* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsTabBarItemAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  | is this tab item is selected or not|
|**`contrasted`** | _boolean_ | ✴️ |  | is in contrasted mode or not|
|**`disabled`** | _boolean_ | ✴️ |  | The tab is disabled or not|
|**`panel`** | _string_ | ✴️ |  | The panel of the corresponding Tab|

### OdsTabBarItemBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`beforeInit`** | _void_ | ✴️ |  | will find the contrasted attribute of the tabs (parent main component)and set here the contrast automatically|
|**`getTabIndex`** | `string` \| `number` | ✴️ |  | get the tab index of the item|
|**`handleClick`** | _void_ | ✴️ |  | handle the click on item.it will trigger the selection by calling select|
|**`handlePanelKeyEvent`** | _void_ | ✴️ |  | handle the keyboard selection|
|**`select`** | _void_ | ✴️ |  | select item in order to make the corresponding panel displayed after|

### OdsTabBarItemEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsTabItemSelectEvent`** | `OdsTabItemSelectEventDetail` | ✴️ |  | |

## Classes

### OdsTabBarItemController
_common controller logic for text component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **getTabIndex**() => _unknown_


> **handlePanelKeyEvent**() => _unknown_



## Type alias

### OdsTabBarItem

interface description ofe all implementation of `ods-tab-bar-item`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTabBarItemAttributes

> _Based on `OdsComponentAttributes`_

### OdsTabBarItemEvents

> _Based on `OdsComponentEvents`_

### OdsTabBarItemMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsTabBarItemDefaultAttributes
`OdsTabBarItemAttributes`