* [**Interfaces**](#interfaces)
* [**Classes**](#classes)

## Interfaces

### OdsCheckboxAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`afterSave`** | `OdsCheckboxAttributeCbk` |  |  | afterSave input allows to set a function that returns a promise.It is called after each time an update was performed and allowing to manage pessimistic update strategy|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
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

### OdsCheckboxCheckedChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsCheckboxEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<OdsCheckboxFocusChangeEventDetail>` | ✴️ |  | Event triggered on checkbox blur|
|**`odsCheckedChange`** | `EventEmitter<OdsCheckboxCheckedChangeEventDetail>` | ✴️ |  | the checked state changed|
|**`odsFocus`** | `EventEmitter<OdsCheckboxFocusChangeEventDetail>` | ✴️ |  | Event triggered on checkbox focus|
|**`odsUpdatingChange`** | `EventEmitter<OdsCheckboxUpdatingChangeEventDetail>` | ✴️ |  | the checked state is being changed|

### OdsCheckboxFocusChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`focus`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsCheckboxMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`setFocus`** | `Promise<void>` | ✴️ |  | programmatically set the focus on the checkbox.this method has to call OdsCheckboxController.setFocus|
|**`setTabindex`** | `Promise<void>` | ✴️ |  | set the tab index.this method has to call OdsCheckboxController.setTabindex|

### OdsCheckboxUpdatingChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`updating`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

## Classes

### OsdsCheckbox
#### Methods
> **setFocus**() => `Promise<void>`


> **setTabindex**(`index`: _number_) => `Promise<void>`

Name | Type | Description 
---|---|---
**index** | _number_ |   |