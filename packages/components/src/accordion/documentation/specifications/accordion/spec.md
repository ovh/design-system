* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsAccordionAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled: see component principles|
|**`opened`** | _boolean_ |  |  | opened or not|
|**`size`** | `md` |  |  | size: see component principles|

### OdsAccordionEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsAccordionToggle`** | `EventEmitter<boolean>` | ✴️ |  | Event triggered on accordion toggle|

## Types

### ODS_ACCORDION_SIZE
|  |
|:---:|
| `md` |