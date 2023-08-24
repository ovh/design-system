* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

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

### odsAccordionGroupDefaultAttributesDoc
|  |
|:---:|

## Classes

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


## Type alias

### OdsAccordionGroup

interface description of all implementation of `ods-accordion-group`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsAccordionGroupAttributes

### OdsAccordionGroupEvents

### OdsAccordionGroupMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsAccordionGroupDefaultAttributes
`OdsComponentAttributes`