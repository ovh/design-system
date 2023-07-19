* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsTextAreaAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `null` \| `string` | ✴️ |  | ariaLabel: see component principles|
|**`ariaLabelledby`** | _string_ |  |  | ariaLabelledby: see component principles|
|**`color`** | `OdsThemeColorIntent` |  |  | main color: see component principles|
|**`cols`** | _number_ |  |  | cols: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted: see component principles|
|**`defaultValue`** | _string_ |  |  | defaultValue: see component principles|
|**`disabled`** | _boolean_ |  |  | cols: see component principles|
|**`error`** | _boolean_ |  |  | on error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | |
|**`flex`** | _boolean_ |  |  | full width or not: see component principles|
|**`formControl`** | `OdsFormControl` |  |  | textarea form control|
|**`hasFocus`** | _boolean_ | ✴️ |  | hasFocus or not|
|**`name`** | _string_ |  |  | name : see component principles|
|**`placeholder`** | _string_ |  |  | placeholder : see component principles|
|**`readOnly`** | _boolean_ |  |  | readOnly or not : see component principles|
|**`required`** | _boolean_ |  |  | required or not : see component principles|
|**`resizable`** | _boolean_ |  |  | resizable or not : see component principles|
|**`rows`** | _number_ |  |  | row: see component principles|
|**`size`** | `md` |  |  | textarea size|
|**`spellcheck`** | _boolean_ | ✴️ |  | spellcheck: see component principles|
|**`textAreaId`** | _string_ |  |  | textarea id|
|**`value`** | _string_ | ✴️ |  | value: see component principles|

### OdsTextAreaEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | _void_ | ✴️ |  | Event triggered on textarea blur|
|**`odsFocus`** | _void_ | ✴️ |  | Event triggered on textarea focus|
|**`odsValueChange`** | `OdsTextAreaValueChangeEventDetail` | ✴️ |  | the textarea value changed|

### OdsTextAreaMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | _void_ | ✴️ |  | empty the value|
|**`getValidity`** | `OdsTextAreaValidityState` | ✴️ |  | get the validity state|
|**`reset`** | _void_ | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | _void_ | ✴️ |  | active the focus on the textarea in order to let the user write something|
|**`setTextAreaTabindex`** | _void_ | ✴️ |  | set a custom tab index for easier navigation|

### OdsTextAreaValidityState
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`customError`** | _boolean_ | ✴️ |  | |
|**`invalid`** | _boolean_ | ✴️ |  | |
|**`valid`** | _boolean_ | ✴️ |  | |
|**`valueMissing`** | _boolean_ | ✴️ |  | |

### OdsTextAreaValueChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`oldValue`** | `null` \| `string` |  |  | |
|**`validity`** | `OdsTextAreaUsedValidityState` |  |  | |
|**`value`** | `null` \| `string` |  |  | |

## Types

### OdsTextAreaSize
|  |
|:---:|
| `md` |

## Classes

### OdsTextAreaController
_common controller logic for textarea component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **beforeInit**() => _unknown_


> **emitValue**() => _unknown_


> **getTextAreaValidity**() => _unknown_


> **handleTextAreaValue**() => _unknown_


> **hasError**() => _unknown_


> **onBlur**() => _unknown_


> **onChange**() => _unknown_


> **onDefaultValueChange**() => _unknown_


> **onFocus**() => _unknown_


> **onInput**() => _unknown_


> **registerFormControl**() => _unknown_


> **setFocus**() => _unknown_


> **setTextAreaTabindex**() => _unknown_


> **setValue**() => _unknown_



## Type alias

### OdsTextArea

interface description of all implementation of `ods-textarea`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsTextAreaUsedValidityState

> - `OdsUsedValidityState`

> - _stepMismatch_

### OdsTextAreaValueChangeEvent

> - `OdsTextAreaValueChangeEventDetail`

### OdsTextAreaAttributes

> _Based on `OdsComponentAttributes`_

### OdsTextAreaEvents

> _Based on `OdsComponentEvents`_

### OdsTextAreaMethods

> _Based on `OdsFormControlMethods`_

### OdsTextAreaValidityState

> _Based on `OdsTextAreaUsedValidityState`_

## Variables

### odsTextAreaDefaultAttributes
`OdsTextAreaAttributes`

### odsTextAreaDefaultAttributesDoc
`OdsTextAreaAttributes`