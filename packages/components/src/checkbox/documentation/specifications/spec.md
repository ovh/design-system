* [**Interfaces**](#interfaces)

## Interfaces

### OdsCheckboxAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`afterSave`** | `OdsCheckboxAttributeCbk` |  |  | afterSave input allows to set a function that returns a promise.It is called after each time an update was performed and allowing to manage pessimistic update strategy|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`beforeSave`** | `OdsCheckboxAttributeCbk` |  |  | beforeSave input allows to set a function that returns a promise.It is called before each time an update will be performed and allowing to manage pessimistic update strategy|
|**`checked`** | _boolean_ | ✴️ |  | The checked status of the checkbox|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ | ✴️ |  | indicate if the checkbox is entirely disabled.it means no interactions (hover, click, focus, etc)|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`hasFocus`** | _boolean_ | ✴️ |  | is the checkbox is currently focused|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`save`** | `OdsCheckboxAttributeCbk` |  |  | save input allows to set a function that returns a promise.It is called before each time an update is performed and allowing to manage pessimistic update strategy.the checked state will be updated just after the call.|
|**`step`** | _number_ |  |  | Step value for the input|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
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
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on checkbox blur|
|**`odsCheckedChange`** | `EventEmitter<OdsCheckboxCheckedChangeEventDetail>` | ✴️ |  | the checked state changed|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on checkbox focus|
|**`odsUpdatingChange`** | `EventEmitter<OdsCheckboxUpdatingChangeEventDetail>` | ✴️ |  | the checked state is being changed|

### OdsCheckboxFocusChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`focus`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsCheckboxUpdatingChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`updating`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |