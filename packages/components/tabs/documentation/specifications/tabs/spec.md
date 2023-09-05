* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsTabsAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ | ✴️ |  | The tab is contrasted|
|**`panel`** | _string_ | ✴️ |  | Tabs active panel|
|**`size`** | `md` | ✴️ |  | Tabs size|

### OdsTabsBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`afterInit`** | _void_ | ✴️ |  | After init, it must call the init of controller in order to make initialized active panel really active|
|**`beforeInit`** | _void_ | ✴️ |  | Before init, it must call the init of controller in order to make trigger the panel at initialization|
|**`emitChanged`** | _void_ | ✴️ |  | emit the event once the tabs changed, after a change of panel|
|**`getTabItems`** | _unknown_ | ✴️ |  | retrieve the current tab items given to the component|
|**`getTabPanels`** | _unknown_ | ✴️ |  | retrieve the current tab panels given to the component|
|**`handleTabItemSelection`** | _void_ | ✴️ |  | receive and handle a tab item select event.It must trigger a call to controller's changeActivePanel|
|**`onContrastedPropChange`** | _void_ | ✴️ |  | when contrasted panel property changed, set the contrast on the items|
|**`onPanelPropChange`** | _void_ | ✴️ |  | when active panel property changed, set the new active panel|

### OdsTabsChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`panel`** | _string_ | ✴️ |  | |

### OdsTabsEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsTabsChanged`** | `OdsTabsChangeEventDetail` | ✴️ |  | |

## Types

### OdsTabsSize
|  |
|:---:|
| `md` |

## Classes

### OdsTabsController
_common controller logic for text component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **afterInit**() => _unknown_


> **beforeInit**() => _unknown_


> **changeActivePanel**() => _unknown_


> **getTabItems**() => _unknown_


> **getTabPanels**() => _unknown_


> **propagateContrastedToItems**() => _unknown_



## Type alias

### OdsTabs

interface description ofe all implementation of `ods-tabs`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTabsAttributes

> _Based on `OdsComponentAttributes`_

### OdsTabsEvents

> _Based on `OdsComponentEvents`_

### OdsTabsMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsTabsDefaultAttributes
`OdsTabsAttributes`