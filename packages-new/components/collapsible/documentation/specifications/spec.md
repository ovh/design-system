* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsCollapsibleAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`opened`** | _boolean_ |  |  | opened or not|

### OdsCollapsibleBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`emitToggle`** | _void_ | ✴️ |  | emit collapsible opened status when toggle event is triggered|

### OdsCollapsibleEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsCollapsibleToggle`** | _boolean_ | ✴️ |  | Event triggered on collapsible toggle|

## Classes

### OdsCollapsibleController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **onToggle**() => _unknown_



## Type alias

### OdsCollapsible

interface description of all implementation of `ods-collapsible`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCollapsibleAttributes

> _Based on `OdsComponentAttributes`_

### OdsCollapsibleEvents

> _Based on `OdsComponentEvents`_

### OdsCollapsibleMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsCollapsibleDefaultAttributes
`OdsCollapsibleAttributes`