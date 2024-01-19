* [**Interfaces**](#interfaces)

## Interfaces

### OdsTextareaAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`cols`** | _number_ |  |  | The visible width of the text control, in average character widths|
|**`defaultValue`** | `undefined` \| `string` | ✴️ |  | Default value of the textarea|
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`inline`** | _boolean_ |  |  | Indicates if the textarea is inline or not: see component principles|
|**`label`** | _string_ |  |  | Label of the input field|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`resizable`** | _boolean_ |  |  | Indicates that the user can resize the control|
|**`rows`** | _number_ |  |  | The number of visible text lines for the control|
|**`spellcheck`** | _boolean_ | ✴️ |  | Define if the spelling of the value should be check|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`textAreaId`** | _string_ |  |  | The native textarea element id|
|**`value`** | `undefined` \| `string` | ✴️ |  | Value of the textarea field|

### OdsTextareaEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsClear`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsReset`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<T>` | ✴️ |  | |

### OdsTextareaMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`formResetCallback`** | _void_ | ✴️ |  | |
|**`getValidity`** | `Promise<undefined` \| `OdsCommonFieldValidityState>` | ✴️ |  | return the element validity|
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | `Promise<void>` | ✴️ |  | active the focus on the input in order to let the user write something|
|**`setTabindex`** | `Promise<void>` | ✴️ |  | set a custom tab index for easier navigation|
