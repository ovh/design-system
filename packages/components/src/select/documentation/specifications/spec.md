* [**Interfaces**](#interfaces)

## Interfaces

### OdsSelectAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`inline`** | _boolean_ |  |  | Indicates if the select is inline or not: see component principles|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`opened`** | _boolean_ |  |  | Indicates if the select is open or not|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`step`** | _number_ |  |  | Step value for the input|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`value`** | `OdsInputValue` | ✴️ |  | Value of the input field|

### OdsSelectOptionAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`selected`** | _boolean_ |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

### OdsSelectOptionClickEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`value`** | `OdsInputValue` | ✴️ |  | |

### OdsSelectOptionEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsSelectOptionClick`** | `EventEmitter<OdsSelectOptionClickEventDetail>` | ✴️ |  | the select value changed|

### OdsSelectOptionMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getLabel`** | `Promise<string>` | ✴️ |  | get label of the element|

### OdsSelectValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ | ✴️ |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`selection`** | `undefined` \| `OsdsSelectOption` | ✴️ |  | |
|**`validity`** | `OdsCommonFieldValidityState` |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |