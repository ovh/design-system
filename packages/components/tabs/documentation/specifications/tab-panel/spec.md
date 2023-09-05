* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsTabPanelAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`active`** | _boolean_ | ✴️ |  |  is the panel is active or nor|
|**`name`** | _string_ | ✴️ |  | identifier name of the panel|

### OdsTabPanelBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|

## Classes

### OdsTabPanelController
_common controller logic for text component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsTabPanel

interface description ofe all implementation of `ods-tab`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTabPanelAttributes

> _Based on `OdsComponentAttributes`_

### OdsTabPanelEvents

> _Based on `OdsComponentEvents`_

### OdsTabPanelMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsTabPanelDefaultAttributes
`OdsTabPanelAttributes`