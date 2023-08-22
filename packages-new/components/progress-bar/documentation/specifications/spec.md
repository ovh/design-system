* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsProgressBarAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`max`** | `string` \| `number` |  |  | Sets the maximum value the progress can reach|
|**`value`** | `string` \| `number` |  |  | The value of the progress bar|

## Classes

### OdsProgressBarController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **validateAttributes**() => _unknown_



## Type alias

### OdsProgressBar

interface description of all implementation of `ods-progress-bar`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsProgressBarAttributes

> _Based on `OdsComponentAttributes`_

### OdsProgressBarEvents

> _Based on `OdsComponentEvents`_

### OdsProgressBarMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsProgressBarDefaultAttributes
`OdsProgressBarAttributes`