* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsCheckboxAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`afterSave`** | `OdsCheckboxAttributeCbk` |  |  | afterSave input allows to set a function that returns a promise.It is called after each time an update was performed and allowing to manage pessimistic update strategy|
|**`ariaLabel`** | `null` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ |  |  | The id to an external description|
|**`beforeSave`** | `OdsCheckboxAttributeCbk` |  |  | beforeSave input allows to set a function that returns a promise.It is called before each time an update will be performed and allowing to manage pessimistic update strategy|
|**`checked`** | _boolean_ | ✴️ |  | The checked status of the checkbox|
|**`disabled`** | _boolean_ | ✴️ |  | indicate if the checkbox is entirely disabled.it means no interactions (hover, click, focus, etc)|
|**`hasFocus`** | _boolean_ | ✴️ |  | is the checkbox is currently focused|
|**`label`** | _string_ |  |  | The corresponding label|
|**`name`** | _string_ |  |  | name used for the input element.useful for browser and posting forms|
|**`save`** | `OdsCheckboxAttributeCbk` |  |  | save input allows to set a function that returns a promise.It is called before each time an update is performed and allowing to manage pessimistic update strategy.the checked state will be updated just after the call.|
|**`updating`** | _boolean_ | ✴️ |  | update status indicating if the checked state is being modified.`updating` will be `true` until `beforeSave` or `save` are processed.it is used in `pessimistic` update|
|**`value`** | _string_ | ✴️ |  | Its corresponding value|

### OdsCheckboxBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checkboxableComponent`** | `null` \| `undefined` | ✴️ |  | component that have to be managed by the checkbox smart component.for instance: a tile, a toggle|
|**`hostElement`** | `Host` | ✴️ |  | reference to the host element of the component|
|**`inputEl`** | `HTMLInputElement` |  |  | reference to the native input element inside the component.could be undefined if the reference is not yet filled.|
|**`tabindex`** | _number_ | ✴️ |  | current tab index parameter.this will be ignored in case of component disabled.must be `0` by default|
|**`afterInit`** | _void_ | ✴️ |  | method executed after initialization of component(`componentDidLoad` with stenciljs for instance).this method has to call OdsCheckboxController.afterInit|
|**`emitBlur`** | _void_ | ✴️ |  | when a blur is triggered, this method emit the event|
|**`emitChecked`** | _void_ | ✴️ |  | emit an event when the checked state changed|
|**`emitFocus`** | _void_ | ✴️ |  | when a focus is triggered, this method emit the event|
|**`emitUpdating`** | _void_ | ✴️ |  | emit an event when the checked state is being updated|
|**`getTabIndex`** | _number_ | ✴️ |  | get the current tab index.this method has to call OdsCheckboxController.getTabIndex|
|**`handleToggleByClick`** | _void_ | ✴️ |  | handle toggle check on click MouseEvent.this method has to call OdsCheckboxController.handleToggleByClick|
|**`handleToggleByKeyEvent`** | _void_ | ✴️ |  | handle toggle check on keyboardEvent.this method has to call OdsCheckboxController.handleToggleByKeyEvent|
|**`onBlur`** | _void_ | ✴️ |  | process the blur of the component.this method has to call OdsCheckboxController.onBlur|
|**`onFocus`** | _void_ | ✴️ |  | process the focus on the component.the method should be call when focus event is triggered on component (by click, keyboard)this method has to call OdsCheckboxController.onFocus|
|**`propagateCheckedToChild`** | _void_ | ✴️ |  | propagate checked attribute to the <checkboxed> component (like tile or toggle).this method should be call on `checked` attribute changed.this method has to call OdsCheckboxController.propagateCheckedToChild|
|**`propagateDisabledToChild`** | _void_ | ✴️ |  | propagate disabled attribute to the <checkboxed> component (like tile or toggle).this method should be call on `disabled` attribute changed.this method has to call OdsCheckboxController.propagateDisabledToChild|
|**`propagateHasFocusToChild`** | _void_ | ✴️ |  | propagate hasFocus attribute to the <checkboxed> component (like tile or toggle).this method should be call on `hasFocus` attribute changed.this method has to call OdsCheckboxController.propagateHasFocusToChild|

### OdsCheckboxButtonAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ |  |  | The checked status of the checkbox button|
|**`checking`** | _boolean_ |  |  | |
|**`color`** | `OdsThemeColorIntent` |  |  | The color theme|
|**`disabled`** | _boolean_ |  |  | Prevent the user from clicking on the radio button|
|**`hasFocus`** | _boolean_ |  |  | Display a focus style (only if interactive)|
|**`indeterminate`** | _boolean_ |  |  | The indeterminate status of the checkbox button (override checked status)|
|**`interactive`** | _boolean_ |  |  | Display an interactive style when clicking or hovering the radio button|
|**`size`** | `OdsCheckboxButtonSize` |  |  | Size of the radio button|

### OdsCheckboxCheckedChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsCheckboxEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `OdsCheckboxFocusChangeEventDetail` | ✴️ |  | Event triggered on checkbox blur|
|**`odsCheckedChange`** | `OdsCheckboxCheckedChangeEventDetail` | ✴️ |  | the checked state changed|
|**`odsFocus`** | `OdsCheckboxFocusChangeEventDetail` | ✴️ |  | Event triggered on checkbox focus|
|**`odsUpdatingChange`** | `OdsCheckboxUpdatingChangeEventDetail` | ✴️ |  | the checked state is being changed|

### OdsCheckboxFocusChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`focus`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsCheckboxMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`setFocus`** | _void_ | ✴️ |  | programmatically set the focus on the checkbox.this method has to call OdsCheckboxController.setFocus|
|**`setTabindex`** | _void_ | ✴️ |  | set the tab index.this method has to call OdsCheckboxController.setTabindex|

### OdsCheckboxUpdatingChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`updating`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsCheckboxable
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | |
|**`checking`** | _boolean_ | ✴️ |  | is in state of awaiting the checked change|
|**`disabled`** | _boolean_ | ✴️ |  | |
|**`hasFocus`** | _boolean_ | ✴️ |  | |

## Types

### OdsCheckboxButtonSize
|  |
|:---:|
| `md` |
| `sm` |

## Classes

### OdsCheckboxButtonController
_common controller logic for checkbox button component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **computeIconName**() => _unknown_



### OdsCheckboxButtonMock

### OdsCheckboxController
_common controller logic for checkbox component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **afterInit**() => _unknown_


> **getTabIndex**() => _unknown_


> **handleToggleByClick**() => _unknown_


> **handleToggleByKeyEvent**() => _unknown_


> **onBlur**() => _unknown_


> **onFocus**() => _unknown_


> **propagateCheckedToChild**() => _unknown_


> **propagateDisabledToChild**() => _unknown_


> **propagateHasFocusToChild**() => _unknown_


> **setFocus**() => _unknown_


> **setTabindex**() => _unknown_


> **toggleCheck**() => _unknown_



### OdsCheckboxUtils
#### Methods
> **isCheckedOnClick**() => _unknown_



## Type alias

### OdsCheckbox

interface description of all implementation of `ods-checkbox`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCheckboxAttributeCbk

### OdsCheckboxButton

interface description of all implementation of `ods-checkbox-button`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCheckboxAttributes

> _Based on `OdsComponentAttributes`_

### OdsCheckboxButtonAttributes

> _Based on `OdsComponentAttributes`_

### OdsCheckboxButtonEvents

> _Based on `OdsComponentEvents`_

### OdsCheckboxButtonMethods

> _Based on `OdsComponentMethods`_

### OdsCheckboxEvents

> _Based on `OdsComponentEvents`_

### OdsCheckboxFocusChangeEventDetail

> _Based on `OdsFocusChangeEventDetail`_

### OdsCheckboxMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsCheckboxButtonDefaultAttributes
`OdsCheckboxButtonAttributes`

### odsCheckboxButtonDefaultAttributesDoc
`OdsCheckboxButtonAttributes`

### odsCheckboxDefaultAttributes
`OdsCheckboxAttributes`