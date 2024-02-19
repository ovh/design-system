* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsTileAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ |  |  | If the tile is selected or not|
|**`checking`** | _boolean_ |  |  | awaiting a change of checked state|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Tile color theme|
|**`disabled`** | _boolean_ |  |  | disabled or not: see component principles|
|**`hasFocus`** | _boolean_ |  |  | indicate if the tile has to be displayed in focused state|
|**`hoverable`** | _boolean_ |  |  | If the tile can have hoverable pseudo-classes or not|
|**`inline`** | _boolean_ |  |  | inline or not: see component principles|
|**`loading`** | _boolean_ |  |  | loading content state|
|**`rounded`** | _boolean_ |  |  | If the tile is rounded or not|
|**`size`** | `ODS_TILE_SIZE` |  |  | Tile size|
|**`variant`** | `ODS_TILE_VARIANT` |  |  | Tile variant|

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