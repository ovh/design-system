* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsRadioGroupAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`defaultValue`** | _unknown_ |  |  | |
|**`disabled`** | _boolean_ | ✴️ |  | Radio-group should be disabled or not|
|**`name`** | _string_ |  |  | |
|**`required`** | _boolean_ |  |  | If the radio selection is required or not|
|**`value`** | _string_ | ✴️ |  | |
|**`afterSave`** | `Promise` |  |  | |
|**`beforeSave`** | `Promise` |  |  | |
|**`save`** | `Promise` |  |  | save input allow to set a function that returns a promise.It is called before each time an update is performed and allowing to manage pessimistic update strategy|

### OdsRadioGroupBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | |
|**`inputId`** | _string_ | ✴️ |  | |
|**`radios`** | _unknown_ | ✴️ |  | |
|**`emitChange`** | _void_ | ✴️ |  | |
|**`emitDisabled`** | _void_ | ✴️ |  | |
|**`onDestroy`** | _void_ | ✴️ |  | |

### OdsRadioGroupEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsDisabledChange`** | _unknown_ | ✴️ |  | |
|**`odsValueChange`** | _unknown_ | ✴️ |  | Emitted when the value has changed.|

### OdsRadioGroupMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getRadios`** | _unknown_ | ✴️ |  | |

### OdsRadioGroupValueChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`newValue`** | _string_ | ✴️ |  | |
|**`previousValue`** | _string_ | ✴️ |  | |

## Classes

### OdsRadioGroupController
_common controller logic for radio-group component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **clearRadios**() => _unknown_


> **handleLabelClick**() => _unknown_


> **onDisabledChange**() => _unknown_


> **onValueChange**() => _unknown_


> **registerRadio**() => _unknown_


> **unregisterRadio**() => _unknown_


> **updateState**() => _unknown_



### OdsRadioGroupMock

## Type alias

### OdsRadioGroup

interface description of all implementation of `ods-radio-group`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsRadioGroupValueChangeEvent

> - `OdsRadioGroupValueChangeEventDetail`

### OdsRadioGroupAttributes

> _Based on `OdsComponentAttributes`_

### OdsRadioGroupEvents

> _Based on `OdsComponentEvents`_

### OdsRadioGroupMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsRadioGroupDefaultAttributes
`OdsRadioGroupAttributes`