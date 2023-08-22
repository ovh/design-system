* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsRangeAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | Range color theme|
|**`disabled`** | _boolean_ |  |  | Indicate if the range is entirely disabled.It means no interaction is possible (hover, click, focus, etc)|
|**`error`** | _boolean_ |  |  | If the range is in error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | Check range error state|
|**`flex`** | _boolean_ |  |  | Flex unit for range width|
|**`forbiddenValues`** | `OdsFormForbiddenValues` | ✴️ |  | The range forbidden values|
|**`formControl`** | `OdsFormControl` |  |  | The form control for range|
|**`id`** | _string_ |  |  | The range id|
|**`max`** | _number_ |  |  | The range maximum value|
|**`min`** | _number_ |  |  | The range minimum value|
|**`step`** | _number_ |  |  | The range step value|
|**`value`** | `OdsRangeValue` | ✴️ |  | The range value|

### OdsRangeBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`dualInputEl`** | `HTMLInputElement` |  |  | Reference to the native input element inside the component when dual.Could be undefined if the reference is not yet filled.|
|**`inputEl`** | `HTMLInputElement` |  |  | Reference to the native input element inside the component.Could be undefined if the reference is not yet filled.|
|**`afterRender`** | _void_ | ✴️ |  | After render component functionThis method has to call OdsRangeController.validateAttributes|
|**`beforeInit`** | _void_ | ✴️ |  | Before init component functionThis method has to call OdsRangeController.beforeInit|
|**`beforeRender`** | _void_ | ✴️ |  | Before render component functionThis method has to call OdsRangeController.initValue|
|**`emitChange`** | _void_ | ✴️ |  | When a change of value is triggered, this method emit the event|
|**`onInput`** | _void_ | ✴️ |  | When the value of the input has changed, this method immediately emit the event|
|**`onKeyup`** | _void_ | ✴️ |  | When the user releases a key, this method emit the event|

### OdsRangeEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsValueChange`** | `OdsRangeValueChangeEventDetail` | ✴️ |  | the range value changed|

### OdsRangeMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getValidity`** | `OdsRangeValidityState` | ✴️ |  | get the validity state|

### OdsRangeValidityState
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`customError`** | _boolean_ | ✴️ |  | |
|**`forbiddenValue`** | _boolean_ | ✴️ |  | is the value forbidden|
|**`invalid`** | _boolean_ | ✴️ |  | |
|**`stepMismatch`** | _boolean_ | ✴️ |  | |
|**`valid`** | _boolean_ | ✴️ |  | |
|**`valueMissing`** | _boolean_ | ✴️ |  | |

### OdsRangeValueChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`oldValue`** | `OdsRangeValue` |  |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `OdsRangeValue` |  |  | |

## Classes

### OdsRangeController
_common controller logic for range component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **asDualValues**() => _unknown_


> **beforeInit**() => _unknown_


> **getRangeValidity**() => _unknown_


> **handleClick**() => _unknown_


> **hasError**() => _unknown_


> **initValue**() => _unknown_


> **isDualRange**() => _unknown_


> **onFormControlChange**() => _unknown_


> **onInput**() => _unknown_


> **onKeyup**() => _unknown_


> **onValueChange**() => _unknown_


> **validateAttributes**() => _unknown_


> **validateValue**() => _unknown_



### OdsRangeMock

## Type alias

### OdsRange

interface description of all implementation of `ods-range`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsRangeComponentMethods

> - `OdsRangeMethods`

### OdsRangeValue

> - _string_

> - _number_

> - _null_

> - _unknown_

### OdsRangeValueChangeEvent

> - `OdsRangeValueChangeEventDetail`

### OdsRangeAttributes

> _Based on `OdsComponentAttributes`_

### OdsRangeEvents

> _Based on `OdsComponentEvents`_

### OdsRangeMethods

> _Based on `OdsFormControlMethods`_

### OdsRangeValidityState

> _Based on `OdsValidityState`_

## Variables

### odsRangeDefaultAttributes
`OdsRangeAttributes`