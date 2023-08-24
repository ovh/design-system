* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsSwitchAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled: see component principles|
|**`size`** | `OdsSwitchSize` |  |  | size: see component principles|
|**`variant`** | `flat` |  |  | used design aspect|

### OdsSwitchBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|

### OdsSwitchChangedEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`current`** | _string_ | ✴️ |  | |
|**`previous`** | _string_ |  |  | |

### OdsSwitchEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsSwitchChanged`** | `OdsSwitchChangedEventDetail` | ✴️ |  | Event triggered on accordion toggle|

### OdsSwitchItemAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | The checked status of the SwitchItem|
|**`id`** | _string_ | ✴️ |  | Its corresponding id|
|**`value`** | _string_ | ✴️ |  | Its corresponding value|

## Types

### OdsSwitchSize
|  |
|:---:|
| `md` |
| `sm` |

### OdsSwitchVariant
|  |
|:---:|
| `flat` |

## Classes

### OdsSwitchController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **changeCheckedSwitchItem**() => _unknown_


> **finCheckedSwitchItem**() => _unknown_


> **findNextSwitchItem**() => _unknown_


> **findPreviousSwitchItem**() => _unknown_


> **getActiveSwitchItemIndex**() => _unknown_


> **getSwitchItems**() => _unknown_



### OdsSwitchItemController

## Type alias

### OdsSwitch

interface description of all implementation of `ods-switch`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSwitchItem

interface description of all implementation of `ods-switch`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSwitchAttributes

> _Based on `OdsComponentAttributes`_

### OdsSwitchEvents

> _Based on `OdsComponentEvents`_

### OdsSwitchItemAttributes

> _Based on `OdsComponentAttributes`_

### OdsSwitchItemEvents

> _Based on `OdsComponentEvents`_

### OdsSwitchItemMethods

> _Based on `OdsComponentMethods`_

### OdsSwitchMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsSwitchDefaultAttributes
`OdsSwitchAttributes`

### odsSwitchDefaultAttributesDoc
`OdsSwitchAttributes`

### odsSwitchItemDefaultAttributes
`OdsSwitchItemAttributes`

### odsSwitchItemDefaultAttributesDoc
`OdsSwitchItemAttributes`