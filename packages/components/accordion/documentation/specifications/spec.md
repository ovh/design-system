* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsAccordionAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled: see component principles|
|**`opened`** | _boolean_ |  |  | opened or not|
|**`size`** | `md` |  |  | size: see component principles|

### OdsAccordionEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsAccordionToggle`** | `EventEmitter` | ✴️ |  | Event triggered on accordion toggle|

### OdsAccordionGroupMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`registerAccordion`** | _void_ | ✴️ |  | |
|**`unRegisterAccordion`** | _void_ | ✴️ |  | |

## Types

### ODS_ACCORDION_SIZE
|  |
|:---:|
| `md` |

## Classes

### OsdsAccordion

### OsdsAccordionGroup
#### Methods
> **registerAccordion**(`accordion`: `OsdsAccordion`) => `Promise<void>`

Name | Type | Description 
---|---|---
**accordion** | `OsdsAccordion` | 
> **unRegisterAccordion**(`accordion`: `OsdsAccordion`) => `Promise<void>`

Name | Type | Description 
---|---|---
**accordion** | `OsdsAccordion` | 