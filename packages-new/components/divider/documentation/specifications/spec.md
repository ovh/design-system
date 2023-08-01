* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsDividerAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | Divider color theme|
|**`contrasted`** | _boolean_ |  |  | Divider design as contrasted version|
|**`separator`** | _boolean_ |  |  | Divider has a separator or not|
|**`size`** | `ODS_DIVIDER_SIZE` |  |  | Divider size|

## Types

### ODS_DIVIDER_SIZE
|  |
|:---:|
| `eight` |
| `five` |
| `four` |
| `nine` |
| `one` |
| `seven` |
| `six` |
| `ten` |
| `three` |
| `two` |
| `zero` |

## Classes

### OdsDividerController
_common controller logic for divider component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsDivider

interface description of all implementation of `ods-divider`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsDividerAttributes

> _Based on `OdsComponentAttributes`_

### OdsDividerEvents

> _Based on `OdsComponentEvents`_

### OdsDividerMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsDividerDefaultAttributes
`OdsDividerAttributes`