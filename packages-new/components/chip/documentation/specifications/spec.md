* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsChipAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | Chip color theme|
|**`contrasted`** | _boolean_ |  |  | Chip is in contrasterd mode or not|
|**`disabled`** | _boolean_ |  |  | Chip is disabled or not|
|**`flex`** | _boolean_ |  |  | Chip as flex|
|**`removable`** | _boolean_ |  |  | If the chip can be removed or not|
|**`selectable`** | _boolean_ |  |  | If the chip can be selected or not|
|**`size`** | `OdsChipSize` |  |  | Chip size|
|**`variant`** | `OdsChipVariant` |  |  | Chip variant|

### OdsChipBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`beforeRender`** | _void_ | ✴️ |  | before render component functionshould be called before component render.it have to check the validity of attributes.|

## Types

### OdsChipSize
|  |
|:---:|
| `md` |
| `sm` |

### OdsChipVariant
|  |
|:---:|
| `flat` |
| `stroked` |

## Classes

### OdsChipController
_common controller logic for chip component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **validateAttributes**() => _unknown_



### OdsChipMock

## Type alias

### OdsChip

interface description of all implementation of `ods-chip`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsChipAttributes

> _Based on `OdsComponentAttributes`_

### OdsChipEvents

> _Based on `OdsComponentEvents`_

### OdsChipMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsChipDefaultAttributes
`OdsChipAttributes`