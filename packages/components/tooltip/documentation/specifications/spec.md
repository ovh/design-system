* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsTooltipAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`variant`** | `OdsTooltipVariant` |  |  | with or without visible tip: see component principles|

### OdsTooltipBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`anchor`** | `HTMLDivElement` | ✴️ |  | |
|**`el`** | `HTMLStencilElement` | ✴️ |  | |
|**`surface`** | `undefined` \| `OcdkSurface` | ✴️ |  | |
|**`checkForClickOutside`** | _void_ | ✴️ |  | |
|**`handleMouseEnter`** | _void_ | ✴️ |  | |
|**`handleMouseLeave`** | _void_ | ✴️ |  | |
|**`handleTriggerBlur`** | _void_ | ✴️ |  | |
|**`handleTriggerClick`** | _void_ | ✴️ |  | |
|**`handleTriggerFocus`** | _void_ | ✴️ |  | |
|**`syncReferences`** | _void_ | ✴️ |  | |

### OdsTooltipMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`closeSurface`** | _void_ | ✴️ |  | Close the surface|
|**`setTabindex`** | _void_ | ✴️ |  | set tab index on the component|

## Types

### OdsTooltipVariant
|  |
|:---:|
| `standard` |
| `tip` |

## Classes

### OdsTooltipContentController
_common controller logic for component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsTooltipController
_common controller logic for component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **checkForClickOutside**() => _unknown_


> **closeSurface**() => _unknown_


> **handleMouseEnter**() => _unknown_


> **handleMouseLeave**() => _unknown_


> **handleTriggerBlur**() => _unknown_


> **handleTriggerClick**() => _unknown_


> **handleTriggerFocus**() => _unknown_


> **syncReferences**() => _unknown_


> **validateAttributes**() => _unknown_



## Type alias

### OdsTooltip

interface description of all implementation of `ods-tooltip`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTooltipContent

interface description of all implementation of `ods-tooltip-content`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTooltipAttributes

> _Based on `OdsComponentAttributes`_

### OdsTooltipContentAttributes

> _Based on `OdsComponentAttributes`_

### OdsTooltipContentEvents

> _Based on `OdsComponentEvents`_

### OdsTooltipContentMethods

> _Based on `OdsComponentMethods`_

### OdsTooltipEvents

> _Based on `OdsComponentEvents`_

### OdsTooltipMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsTooltipContentDefaultAttributes
`OdsTooltipContentAttributes`

### odsTooltipDefaultAttributes
`OdsTooltipAttributes`