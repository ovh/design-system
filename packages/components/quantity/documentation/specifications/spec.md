* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsQuantityAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`disabled`** | _boolean_ |  |  | Quantity is disabled or not|

### OdsQuantityBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`input`** | `null` \| `HTMLInputElement` \| `undefined` | ✴️ |  | reference to the osds-input or native input element inside the component.could be null if the reference is not yet filled.|
|**`minus`** | `null` \| `HTMLSlotElement` | ✴️ |  | reference to the minus slot inside the component.could be null if the reference is not yet filled.|
|**`plus`** | `null` \| `HTMLSlotElement` | ✴️ |  | reference to the plus slot inside the component.could be null if the reference is not yet filled.|
|**`afterInit`** | _void_ | ✴️ |  | after init component functionshould be called after component loadsshould process input value change|
|**`afterRender`** | _void_ | ✴️ |  | after render component functionshould be called after component rendershould init inputshould init slots|
|**`onDestroy`** | _void_ | ✴️ |  | after init component functionshould be called after component loadsshould clear event listeners|

## Classes

### OdsQuantityController
_common controller logic for chip component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **clearEventListeners**() => _unknown_


> **initInput**() => _unknown_


> **initSlots**() => _unknown_


> **minusClickHandler**() => _unknown_


> **plusClickHandler**() => _unknown_


> **processInputValueChange**() => _unknown_


> **setDisabledOnChildren**() => _unknown_



### OdsQuantityMock
_Mocked generic implementation that represents an `OdsQuantity`._
_it allows to test the controller with a stub implementation._


## Type alias

### OdsQuantity

interface description of all implementation of `ods-quantity`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsQuantityEvents

### OdsQuantityMethods

### OdsQuantityAttributes

> _Based on `OdsComponentAttributes`_

## Variables

### odsQuantityDefaultAttributes
`OdsQuantityAttributes`