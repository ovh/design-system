* [**Interfaces**](#interfaces)

## Interfaces

### OdsRadioAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ |  |  | The id to an external description|
|**`checked`** | _boolean_ | ✴️ |  | The checked status of the radio|
|**`checking`** | _boolean_ | ✴️ |  | |
|**`disabled`** | _boolean_ | ✴️ |  | Radio should be disabled or not|
|**`label`** | _string_ |  |  | The radio corresponding label|
|**`name`** | _string_ |  |  | The name corresponding to its parent radio group|
|**`value`** | _string_ | ✴️ |  | Its corresponding value|
|**`afterSave`** | `Promise<void>` |  |  | |
|**`beforeSave`** | `Promise<void>` |  |  | |
|**`save`** | `Promise<void>` |  |  | save input allow to set a function that returns a promise.It is called before each time an update is performed and allowing to manage pessimistic update strategy|

### OdsRadioCheckedChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsRadioCheckingChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checking`** | _boolean_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |

### OdsRadioEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on radio blur|
|**`odsCheckedChange`** | `EventEmitter<OdsRadioCheckedChangeEventDetail>` | ✴️ |  | the checked state changed|
|**`odsCheckingChange`** | `EventEmitter<OdsRadioCheckingChangeEventDetail>` | ✴️ |  | the checked state is being changed|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on radio focus|
|**`odsValueChange`** | `EventEmitter<unknown>` | ✴️ |  | the radio value changed|

### OdsRadioMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|