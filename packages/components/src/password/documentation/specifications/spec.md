* [**Interfaces**](#interfaces)

## Interfaces

### OdsPasswordAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`defaultValue`** | `undefined` \| `string` | ✴️ |  | |
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`inline`** | _boolean_ |  |  | Indicates if the password is inline or not|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`masked`** | _boolean_ |  |  | Indicates if the input is masked or not|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`value`** | `undefined` \| `string` | ✴️ |  | Current value of the password|

### OdsPasswordEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsClear`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsHide`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsReset`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<OdsCommonFieldValueChangeEventDetail>` | ✴️ |  | |

### OdsPasswordMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`formResetCallback`** | _void_ | ✴️ |  | |
|**`getValidity`** | `Promise<undefined` \| `OdsCommonFieldValidityState>` | ✴️ |  | return the element validity|
|**`hide`** | `Promise<void>` | ✴️ |  | |
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | `Promise<void>` | ✴️ |  | active the focus on the input in order to let the user write something|

### OdsPasswordValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ | ✴️ |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`validity`** | `OdsCommonFieldValidityState` |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |