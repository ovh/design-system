* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsInputAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `null` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`color`** | `OdsThemeColorIntent` |  |  | Main color of the input: see component principles|
|**`contrasted`** | _boolean_ |  |  | Indicates if the input is contrasted or not: see component principles|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ |  |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ |  |  | Indicates if the input shows error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | Controls the error state of the input|
|**`flex`** | _boolean_ |  |  | Indicates if the input is full width or not: see component principles|
|**`forbiddenValues`** | `OdsFormForbiddenValues` | ✴️ |  | List of forbidden values for the input|
|**`formControl`** | `OdsFormControl` |  |  | Control object of the form the input belongs to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to be used in the input field|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`masked`** | _boolean_ |  |  | Indicates if the input is masked or not|
|**`max`** | _number_ |  |  | Maximum value for the input (type number)|
|**`min`** | _number_ |  |  | Minimum value for the input (type number)|
|**`name`** | _string_ |  |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`size`** | `md` |  |  | Size of the input: see component principles|
|**`step`** | _number_ |  |  | Step value for the input|
|**`type`** | `OdsInputType` | ✴️ |  | Type of the input field|
|**`value`** | `OdsInputValue` | ✴️ |  | Current value of the input|

### OdsInputBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`hasFocus`** | _boolean_ | ✴️ |  | |
|**`inputEl`** | `HTMLInputElement` |  |  | reference to the input element.|
|**`inputTabindex`** | _number_ | ✴️ |  | |
|**`beforeInit`** | _void_ | ✴️ |  | before init component function.should be called before component init.should register form controlshould emit valueshould set value with default if undefined|
|**`emitBlur`** | _void_ | ✴️ |  | when a blur is triggered, this method emit the event|
|**`emitChange`** | _void_ | ✴️ |  | when a input change is triggered, this method emit the event|
|**`emitFocus`** | _void_ | ✴️ |  | when a focus is triggered, this method emit the event|
|**`onBlur`** | _void_ | ✴️ |  | |
|**`onChange`** | _void_ | ✴️ |  | process the change of the component.|
|**`onFocus`** | _void_ | ✴️ |  | |
|**`onInput`** | _void_ | ✴️ |  | process the input of the component.this method has to call OdsInputController.onInput|

### OdsInputEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsInputBlur`** | _void_ | ✴️ |  | |
|**`odsInputFocus`** | _void_ | ✴️ |  | Event triggered on input blur|
|**`odsValueChange`** | `OdsInputValueChangeEventDetail` | ✴️ |  | the input value changed|

### OdsInputMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | _void_ | ✴️ |  | empty the value|
|**`getValidity`** | `OdsInputValidityState` | ✴️ |  | get the validity state|
|**`hide`** | _void_ | ✴️ |  | hide or display the value|
|**`reset`** | _void_ | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | _void_ | ✴️ |  | active the focus on the input in order to let the user write something|
|**`setInputTabindex`** | _void_ | ✴️ |  | set a custom tab index for easier navigation|
|**`stepDown`** | _void_ | ✴️ |  | |
|**`stepUp`** | _void_ | ✴️ |  | |

### OdsInputValidityState
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`badInput`** | _boolean_ |  |  | |
|**`customError`** | _boolean_ | ✴️ |  | |
|**`forbiddenValue`** | _boolean_ | ✴️ |  | is the value is forbidden|
|**`invalid`** | _boolean_ | ✴️ |  | |
|**`patternMismatch`** | _boolean_ |  |  | |
|**`rangeOverflow`** | _boolean_ |  |  | |
|**`rangeUnderflow`** | _boolean_ |  |  | |
|**`stepMismatch`** | _boolean_ | ✴️ |  | |
|**`tooLong`** | _boolean_ |  |  | |
|**`tooShort`** | _boolean_ |  |  | |
|**`typeMismatch`** | _boolean_ |  |  | |
|**`valid`** | _boolean_ | ✴️ |  | |
|**`valueMissing`** | _boolean_ | ✴️ |  | |

### OdsInputValueChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`oldValue`** | `null` \| `string` |  |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `undefined` \| `null` \| `string` | ✴️ |  | |

## Types

### OdsInputSize
|  |
|:---:|
| `md` |

### OdsInputType
|  |
|:---:|
| `date` |
| `email` |
| `number` |
| `password` |
| `search` |
| `tel` |
| `text` |
| `time` |
| `url` |

## Classes

### OdsInputController
_common controller logic for input component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **assertValue**() => _unknown_


> **beforeInit**() => _unknown_


> **clear**() => _unknown_


> **getInputValidity**() => _unknown_


> **hasError**() => _unknown_


> **hide**() => _unknown_


> **onBlur**() => _unknown_


> **onChange**() => _unknown_


> **onDefaultValueChange**() => _unknown_


> **onFocus**() => _unknown_


> **onFormControlChange**() => _unknown_


> **onInput**() => _unknown_


> **onValueChange**() => _unknown_


> **reset**() => _unknown_


> **setInputTabindex**() => _unknown_


> **stepDown**() => _unknown_


> **stepUp**() => _unknown_



## Type alias

### HTMLOdsInputElement

### OdsInput

interface description of all implementation of `ods-input`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsInputValue

> - _string_

> - _number_

> - _null_

### OdsInputValueChangeEvent

> - `OdsInputValueChangeEventDetail`

### OdsInputAttributes

> _Based on `OdsComponentAttributes`_

### OdsInputEvents

> _Based on `OdsComponentEvents`_

### OdsInputMethods

> _Based on `OdsFormControlMethods`_

### OdsInputValidityState

> _Based on `OdsValidityState`_

## Variables

### odsInputDefaultAttributes
`OdsInputAttributes`