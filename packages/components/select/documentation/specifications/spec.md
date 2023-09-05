* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsSelectAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `null` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ | ✴️ |  | The id to an external description|
|**`color`** | `primary` | ✴️ |  | the primary color of the theme|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Its corresponding default value. It needs to match with one option so the option will be selected|
|**`disabled`** | _boolean_ | ✴️ |  | indicates if the select is entirely disabled.it means no interactions (hover, click, focus, etc)|
|**`flex`** | _boolean_ | ✴️ |  | full width or not: see component principles|
|**`opened`** | _boolean_ |  |  | opened or not|
|**`required`** | _boolean_ | ✴️ |  | indicates if a value has to be selected|
|**`size`** | `md` | ✴️ |  | size: see component principles|
|**`value`** | `OdsInputValue` | ✴️ |  | Its corresponding value. It needs to correspond to the value of the option|

### OdsSelectBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`anchor`** | `HTMLElement` | ✴️ |  | |
|**`el`** | `HTMLElement` | ✴️ |  | |
|**`surface`** | `undefined` \| `OcdkSurface` | ✴️ |  | |
|**`handleSelectClick`** | _void_ | ✴️ |  | |
|**`handleValueChange`** | _void_ | ✴️ |  | |
|**`syncReferences`** | _void_ | ✴️ |  | |

### OdsSelectEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | _void_ | ✴️ |  | Event triggered on select blur|
|**`odsFocus`** | _void_ | ✴️ |  | Event triggered on select focus|
|**`odsValueChange`** | `OdsSelectValueChangeEventDetail` | ✴️ |  | Emitted when the value has changed|

### OdsSelectMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | _void_ | ✴️ |  | erase the current selection|
|**`getValidity`** | `OdsSelectValidityState` | ✴️ |  | get the validity state|
|**`reset`** | _void_ | ✴️ |  | reset the value to the initial one (default value)|
|**`setFocus`** | _void_ | ✴️ |  | focus the element|
|**`setInputTabindex`** | _void_ | ✴️ |  | set tab index on the component|
|**`validate`** | `OdsSelectValidityState` | ✴️ |  | check that the select is valid or not.In case of required field, the validation will check the entered valueand set the field in error if it is not fulfilled|

### OdsSelectOptionAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`selected`** | _boolean_ |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

### OdsSelectOptionClickEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`value`** | `OdsInputValue` | ✴️ |  | |

### OdsSelectOptionEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsSelectOptionClick`** | `OdsSelectOptionClickEventDetail` | ✴️ |  | the select value changed|

### OdsSelectOptionMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getLabel`** | _string_ | ✴️ |  | get label of the element|

### OdsSelectValidityState
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`customError`** | _boolean_ | ✴️ |  | |
|**`forbiddenValue`** | _boolean_ | ✴️ |  | |
|**`invalid`** | _boolean_ | ✴️ |  | |
|**`stepMismatch`** | _boolean_ | ✴️ |  | |
|**`valid`** | _boolean_ | ✴️ |  | |
|**`valueMissing`** | _boolean_ | ✴️ |  | |

### OdsSelectValueChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`selection`** | `null` \| `OdsSelectOption` | ✴️ |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

## Types

### OdsSelectSize
|  |
|:---:|
| `md` |

## Classes

### OdsSelectController
_common controller logic for select component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **closeSurface**() => _unknown_


> **getValidity**() => _unknown_


> **handlerKeyDown**() => _unknown_


> **hasRequiredError**() => _unknown_


> **openSurface**() => _unknown_


> **syncReferences**() => _unknown_



### OdsSelectGroupController
_common controller logic for select group component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


### OdsSelectOptionController
_common controller logic for select option component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsSelect

interface description of all implementation of `ods-select-option`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSelectGroup

interface description of all implementation of `ods-select-group`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSelectOption

interface description of all implementation of `ods-select-option`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSelectOptionClickEvent

> - `OdsSelectOptionClickEventDetail`

### OdsSelectValueChangeEvent

> - `OdsSelectValueChangeEventDetail`

### OdsSelectAttributes

> _Based on `OdsComponentAttributes`_

### OdsSelectEvents

> _Based on `OdsComponentEvents`_

### OdsSelectGroupAttributes

> _Based on `OdsComponentAttributes`_

### OdsSelectGroupEvents

> _Based on `OdsComponentEvents`_

### OdsSelectGroupMethods

> _Based on `OdsComponentMethods`_

### OdsSelectMethods

> _Based on `OdsComponentMethods`_

### OdsSelectOptionAttributes

> _Based on `OdsComponentAttributes`_

### OdsSelectOptionEvents

> _Based on `OdsComponentEvents`_

### OdsSelectOptionMethods

> _Based on `OdsComponentMethods`_

### OdsSelectValidityState

> _Based on `OdsValidityState`_

## Variables

### odsSelectDefaultAttributes
`OdsSelectAttributes`

### odsSelectDefaultAttributesDoc
`OdsSelectAttributes`

### odsSelectGroupDefaultAttributes
`OdsSelectGroupAttributes`

### odsSelectOptionDefaultAttributes
`OdsSelectOptionAttributes`