* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsAccordionAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled: see component principles|
|**`opened`** | _boolean_ |  |  | opened or not|
|**`size`** | `md` |  |  | size: see component principles|

### OdsAccordionBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`accordionGroup`** | `null` \| `undefined` | ✴️ |  | reference to the OdsAccordionGroup outside the component.could be null if the reference is not yet filled.|
|**`detailsEl`** | `HTMLDetailsElement` |  |  | reference to the native details element inside the component.could be undefined if the reference is not yet filled.|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`afterInit`** | _void_ | ✴️ |  | after init component function|
|**`beforeInit`** | _void_ | ✴️ |  | before init component functionshould be called in connectedCallback stencil method|
|**`emitToggle`** | _void_ | ✴️ |  | emit accordion opened status when toggle event is triggered|
|**`onDestroy`** | _void_ | ✴️ |  | on destroy component functionshould be called in disconnectedCallback stencil method|

### OdsAccordionEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsAccordionToggle`** | _boolean_ | ✴️ |  | Event triggered on accordion toggle|

### OdsAccordionGroupBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`accordionGroupId`** | _string_ |  |  | reference to the accordion group id.|
|**`accordions`** | _unknown_ | ✴️ |  | reference to the accordion list inside the component.|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`beforeInit`** | _void_ | ✴️ |  | before init component functionshould be called in connectedCallback stencil method|
|**`onDestroy`** | _void_ | ✴️ |  | on destroy component functionshould be called in disconnectedCallback stencil method|

### OdsAccordionGroupMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`registerAccordion`** | _void_ | ✴️ |  | |
|**`unRegisterAccordion`** | _void_ | ✴️ |  | |

## Types

### OdsAccordionSize
|  |
|:---:|
| `md` |

### odsAccordionGroupDefaultAttributesDoc
|  |
|:---:|

## Classes

### OdsAccordionController
_common controller logic for accordion component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **beforeInit**() => _unknown_


> **onDestroy**() => _unknown_


> **onToggle**() => _unknown_


> **syncOpenedOnDetail**() => _unknown_



### OdsAccordionGroupController
_common controller logic for accordion group component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **beforeInit**() => _unknown_


> **handleToggle**() => _unknown_


> **onDestroy**() => _unknown_


> **registerAccordion**() => _unknown_


> **unRegisterAccordion**() => _unknown_



### OdsAccordionGroupMock
_Mocked generic implementation that represents an `OdsAccordionGroup`._
_it allows to test the controller with a stub implementation._


### OdsAccordionMock
_Mocked generic implementation that represents an `OdsAccordion`._
_it allows to test the controller with a stub implementation._


## Type alias

### OdsAccordion

interface description of all implementation of `ods-accordion`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsAccordionGroup

interface description of all implementation of `ods-accordion-group`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsAccordionGroupAttributes

### OdsAccordionGroupEvents

### OdsAccordionToggleEvent

> - _unknown_

### OdsAccordionAttributes

> _Based on `OdsComponentAttributes`_

### OdsAccordionEvents

> _Based on `OdsComponentEvents`_

### OdsAccordionGroupMethods

> _Based on `OdsComponentMethods`_

### OdsAccordionMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsAccordionDefaultAttributes
`OdsAccordionAttributes`

### odsAccordionDefaultAttributesDoc
`OdsAccordionAttributes`

### odsAccordionGroupDefaultAttributes
`OdsComponentAttributes`