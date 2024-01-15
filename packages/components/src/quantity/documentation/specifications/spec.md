* [**Interfaces**](#interfaces)

## Interfaces

### OdsQuantityAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Main color of the input: see component principles|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | Controls the error state of the input|
|**`forbiddenValues`** | `OdsFormForbiddenValues` |  |  | List of forbidden values for the input|
|**`formControl`** | `OdsFormControl` |  |  | Control object of the form the input belongs to|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`masked`** | _boolean_ |  |  | Indicates if the input is masked or not|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`size`** | `md` |  |  | Size of the input: see component principles|
|**`step`** | _number_ |  |  | Step value for the input|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`type`** | `ODS_COMMON_INPUT_TYPE` |  |  | Type of the input field|
|**`value`** | `OdsInputValue` | ✴️ |  | Type of the input field|