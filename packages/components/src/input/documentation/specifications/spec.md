* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsInputAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Main color of the input: see component principles|
|**`contrasted`** | _boolean_ |  |  | Indicates if the input is contrasted or not: see component principles|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ |  |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ |  |  | Indicates if the input shows error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | Controls the error state of the input|
|**`forbiddenValues`** | `OdsFormForbiddenValues` | ✴️ |  | List of forbidden values for the input|
|**`formControl`** | `OdsFormControl` |  |  | Control object of the form the input belongs to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to be used in the input field|
|**`inline`** | _boolean_ |  |  | Indicates if the input is inline or not: see component principles|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`masked`** | _boolean_ |  |  | Indicates if the input is masked or not|
|**`max`** | _number_ |  |  | Maximum value for the input (type number)|
|**`min`** | _number_ |  |  | Minimum value for the input (type number)|
|**`name`** | _string_ |  |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`size`** | `md` |  |  | Size of the input: see component principles|
|**`step`** | _number_ |  |  | Step value for the input|
|**`type`** | `ODS_INPUT_TYPE` | ✴️ |  | Type of the input field|
|**`value`** | `OdsInputValue` | ✴️ |  | Current value of the input|

### OdsInputEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<OdsInputValueChangeEventDetail>` | ✴️ |  | the input value changed|

### OdsInputMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`getValidity`** | `Promise<OdsInputValidityState>` | ✴️ |  | get the validity state|
|**`hide`** | `Promise<void>` | ✴️ |  | hide or display the value|
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | `Promise<void>` | ✴️ |  | active the focus on the input in order to let the user write something|
|**`setInputTabindex`** | `Promise<void>` | ✴️ |  | set a custom tab index for easier navigation|
|**`stepDown`** | `Promise<void>` | ✴️ |  | |
|**`stepUp`** | `Promise<void>` | ✴️ |  | |

### OdsInputValidityState
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`badInput`** | _boolean_ |  |  | |
|**`customError`** | _boolean_ | ✴️ |  | |
|**`forbiddenValue`** | _boolean_ | ✴️ |  | |
|**`invalid`** | _boolean_ | ✴️ |  | |
|**`patternMismatch`** | _boolean_ |  |  | |
|**`rangeOverflow`** | _boolean_ |  |  | |
|**`rangeUnderflow`** | _boolean_ |  |  | |
|**`stepMismatch`** | _boolean_ | ✴️ |  | |
|**`tooLong`** | _boolean_ |  |  | |
|**`tooShort`** | _boolean_ |  |  | |
|**`typeMismatch`** | _boolean_ |  |  | |
|**`valid`** | _boolean_ | ✴️ |  | |
|**`valueMissing`** | _boolean_ | ✴️ |  | |

### OdsInputValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`oldValue`** | `undefined` \| `string` |  |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `undefined` \| `undefined` \| `string` | ✴️ |  | |

## Types

### ODS_INPUT_SIZE
|  |
|:---:|
| `md` |

### ODS_INPUT_TYPE
|  |
|:---:|
| `date` |
| `email` |
| `number` |
| `password` |
| `search` |
| `tel` |
| `text` |
| `time` |
| `url` |