* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsPopoverBehaviour
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`anchor`** | `HTMLElement` | ✴️ |  | |
|**`el`** | `HTMLElement` | ✴️ |  | |
|**`surface`** | `undefined` \| `OcdkSurface` | ✴️ |  | |
|**`title`** | `null` \| `HTMLElement` | ✴️ |  | |
|**`checkForClickOutside`** | _void_ | ✴️ |  | |
|**`handleSurfaceKey`** | _void_ | ✴️ |  | |
|**`handleTriggerClick`** | _void_ | ✴️ |  | |
|**`handleTriggerKey`** | _void_ | ✴️ |  | |
|**`syncReferences`** | _void_ | ✴️ |  | |

### OdsPopoverMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`closeSurface`** | _void_ | ✴️ |  | Close the surface|

## Classes

### OdsPopoverContentController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsPopoverController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **checkForClickOutside**() => _unknown_


> **closeSurface**() => _unknown_


> **handleSurfaceKey**() => _unknown_


> **handleTriggerClick**() => _unknown_


> **handleTriggerKey**() => _unknown_


> **syncReferences**() => _unknown_


> **validateAttributes**() => _unknown_



## Type alias

### OdsPopover

interface description of all implementation of `ods-popover`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsPopoverContent

interface description of all implementation of `ods-popover-content`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsPopoverAttributes

> _Based on `OdsComponentAttributes`_

### OdsPopoverContentAttributes

> _Based on `OdsComponentAttributes`_

### OdsPopoverContentEvents

> _Based on `OdsComponentEvents`_

### OdsPopoverContentMethods

> _Based on `OdsComponentMethods`_

### OdsPopoverEvents

> _Based on `OdsComponentEvents`_

### OdsPopoverMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsPopoverContentDefaultAttributes
`OdsPopoverContentAttributes`

### odsPopoverDefaultAttributes
`OdsPopoverAttributes`