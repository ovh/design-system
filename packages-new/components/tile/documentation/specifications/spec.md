* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsTileAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ |  |  | If the tile is selected or not|
|**`checking`** | _boolean_ |️  |  | awaiting a change of checked state|
|**`color`** | `OdsThemeColorIntent` |  |  | Tile color theme|
|**`disabled`** | _boolean_ |  |  | |
|**`flex`** | _boolean_ |  |  | |
|**`hasFocus`** | _boolean_ |  |  | indicate if the tile has to be displayed in focused state|
|**`hoverable`** | _boolean_ |  |  | If the tile can have hoverable pseudo-classes or not|
|**`loading`** | _boolean_ |  |  | loading content state|
|**`rounded`** | _boolean_ |  |  | If the tile is rounded or not|
|**`size`** | `ODS_TILE_SIZE` |  |  | Tile size|
|**`variant`** | `ODS_TILE_VARIANT` |  |  | Tile variant|

### OdsTileBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`beforeRender`** | _void_ | ✴️ |  | before render component function should be called before component render it have to check the validity of attributes.|

## Types

### ODS_TILE_SIZE
|  |
|:---:|
| `md` |
| `sm` |

### ODS_TILE_VARIANT
|  |
|:---:|
| `flat` |
| `ghost` |
| `hollow` |
| `stroked` |

## Classes

### OdsTileController
_common controller logic for tile component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **handleClick**() => _unknown_


> **validateAttributes**() => _unknown_



### OdsTileMock

## Type alias

### OdsTile

interface description of all implementation of `ods-tile`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTileAttributes

> _Based on `OdsRadioizable`_

### OdsTileEvents

> _Based on `OdsComponentEvents`_

### OdsTileMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsTileDefaultAttributes
`OdsTileAttributes`