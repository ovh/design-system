* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsSpinnerAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`flex`** | _boolean_ |  |  | full width or not: see component principles|
|**`mode`** | `INDETERMINATE` |  |  | choose between infinite or progress spinner (infinite only for now)|
|**`size`** | `OdsSpinnerSize` |  |  | size: see component principles|

## Types

### OdsSpinnerMode
|  |
|:---:|
| `INDETERMINATE` |

### OdsSpinnerSize
|  |
|:---:|
| `lg` |
| `md` |
| `sm` |

## Classes

### OdsSpinnerController
_common controller logic for component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsSpinner

interface description of all implementation of `ods-spinner`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSpinnerAttributes

> _Based on `OdsComponentAttributes`_

### OdsSpinnerEvents

> _Based on `OdsComponentEvents`_

### OdsSpinnerMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsSpinnerDefaultAttributes
`OdsSpinnerAttributes`