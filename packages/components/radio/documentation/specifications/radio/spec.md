* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsRadioAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `null` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ |  |  | The id to an external description|
|**`checked`** | _boolean_ | ✴️ |  | The checked status of the radio|
|**`checking`** | _boolean_ | ✴️ |  | is in state of awaiting the checked change|
|**`disabled`** | _boolean_ | ✴️ |  | Radio should be disabled or not|
|**`label`** | _string_ |  |  | The radio corresponding label|
|**`name`** | _string_ |  |  | The name corresponding to its parent radio group|
|**`value`** | _string_ | ✴️ |  | Its corresponding value|
|**`afterSave`** | `Promise` |  |  | |
|**`beforeSave`** | `Promise` |  |  | |
|**`save`** | `Promise` |  |  | save input allow to set a function that returns a promise.It is called before each time an update is performed and allowing to manage pessimistic update strategy|

### OdsRadioBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`buttonTabindex`** | _number_ | ✴️ |  | |
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`radioGroup`** | `null` \| `undefined` | ✴️ |  | reference to the OdsRadioGroup outside the component.could be null if the reference is not yet filled.|
|**`radioizedComponent`** | `null` \| `undefined` | ✴️ |  | |
|**`afterInit`** | _void_ | ✴️ |  | after init component function.should be called after component init.should set radioizedComponentshould update checked on childshould update disabled on child|
|**`beforeInit`** | _void_ | ✴️ |  | before init component function.should be called before component init.should update checked on childshould update disabled on childshould register radio if radio groupshould update stateshould add event listeners for disabled and value change|
|**`emitBlur`** | _void_ | ✴️ |  | when a blur is triggered, this method emit the event|
|**`emitChecked`** | _void_ | ✴️ |  | this method emit the checked event|
|**`emitChecking`** | _void_ | ✴️ |  | this method emit the checking event|
|**`emitFocus`** | _void_ | ✴️ |  | when a focus is triggered, this method emit the event|
|**`onBlur`** | _void_ | ✴️ |  | |
|**`onDestroy`** | _void_ | ✴️ |  | on destroy component functionshould be called in disconnectedCallback stencil methodshould unregister radioshould remove envent listeners for disabled and value changeshould reset radio group|
|**`onFocus`** | _void_ | ✴️ |  | |

### OdsRadioButtonAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ |  |  | The checked status of the radio button|
|**`checking`** | _boolean_ |  |  | |
|**`color`** | `OdsThemeColorIntent` |  |  | The color theme|
|**`disabled`** | _boolean_ |  |  | Prevent the user from clicking on the radio button|
|**`hasFocus`** | _boolean_ |  |  | Display a focus style (only if interactive)|
|**`interactive`** | _boolean_ |  |  | Display an interactive style when clicking or hovering the radio button|
|**`size`** | `OdsRadioButtonSize` |  |  | Size of the radio button|

### OdsRadioCheckedChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsRadioCheckingChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checking`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsRadioEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | _void_ | ✴️ |  | Event triggered on radio blur|
|**`odsCheckedChange`** | `OdsRadioCheckedChangeEventDetail` | ✴️ |  | the checked state changed|
|**`odsCheckingChange`** | `OdsRadioCheckingChangeEventDetail` | ✴️ |  | the checked state is being changed|
|**`odsFocus`** | _void_ | ✴️ |  | Event triggered on radio focus|
|**`odsValueChange`** | _unknown_ | ✴️ |  | the radio value changed|

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

### OdsRadioizable
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | |
|**`checking`** | _boolean_ | ✴️ |  | is in state of awaiting the checked change|
|**`disabled`** | _boolean_ | ✴️ |  | |

## Types

### OdsRadioButtonSize
|  |
|:---:|
| `md` |
| `sm` |

## Classes

### OdsRadioButtonController
_common controller logic for radio button component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsRadioController
_common controller logic for radio component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **afterInit**() => _unknown_


> **beforeInit**() => _unknown_


> **closestPassShadow**() => _unknown_


> **handleLabelClick**() => _unknown_


> **handleLabelKeyEvent**() => _unknown_


> **onBlur**() => _unknown_


> **onDestroy**() => _unknown_


> **onFocus**() => _unknown_


> **setButtonTabindex**() => _unknown_


> **updateCheckOnChild**() => _unknown_


> **updateCheckingOnChild**() => _unknown_


> **updateDisabledOnChild**() => _unknown_


> **updateState**() => _unknown_


> **watchValue**() => _unknown_



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

### OdsRadioMock

### OdsRadioUtils
#### Methods
> **isCheckedOnClick**() => _unknown_



## Type alias

### OdsRadio

interface description of all implementation of `ods-radio`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsRadioButton

interface description of all implementation of `ods-radio-button`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsRadioCheckedChangeEvent

> - `OdsRadioCheckedChangeEventDetail`

### OdsRadioCheckingChangeEvent

> - `OdsRadioCheckingChangeEventDetail`

### OdsRadioGroup

interface description of all implementation of `ods-radio-group`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsRadioGroupValueChangeEvent

> - `OdsRadioGroupValueChangeEventDetail`

### OdsRadioAttributes

> _Based on `OdsRadioizable`_

### OdsRadioButtonAttributes

> _Based on `OdsComponentAttributes`_

### OdsRadioButtonEvents

> _Based on `OdsComponentEvents`_

### OdsRadioButtonMethods

> _Based on `OdsComponentMethods`_

### OdsRadioEvents

> _Based on `OdsComponentEvents`_

### OdsRadioGroupAttributes

> _Based on `OdsComponentAttributes`_

### OdsRadioGroupEvents

> _Based on `OdsComponentEvents`_

### OdsRadioGroupMethods

> _Based on `OdsComponentMethods`_

### OdsRadioMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsRadioButtonDefaultAttributes
`OdsRadioButtonAttributes`

### odsRadioDefaultAttributes
`OdsRadioAttributes`

### odsRadioGroupDefaultAttributes
`OdsRadioGroupAttributes`