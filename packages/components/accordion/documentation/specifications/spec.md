* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

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
#### Methods
> **afterInit**() => _unknown_


> **beforeInit**() => _unknown_


> **componentDidLoad**() => _unknown_


> **connectedCallback**() => _unknown_


> **disconnectedCallback**() => _unknown_


> **emitToggle**() => _unknown_


> **onDestroy**() => _unknown_


> **onOpenedChanged**() => _unknown_


> **render**() => _unknown_



### OsdsAccordionGroup
#### Methods
> **beforeInit**() => _unknown_


> **connectedCallback**() => _unknown_


> **disconnectedCallback**() => _unknown_


> **onDestroy**() => _unknown_


> **registerAccordion**() => _unknown_


> **render**() => _unknown_


> **unRegisterAccordion**() => _unknown_



## Type alias

### OdsAccordionToggleEvent

> - _unknown_

## Variables

### ODS_ACCORDION_SIZES
_unknown_