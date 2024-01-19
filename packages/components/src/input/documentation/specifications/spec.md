* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsInputAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to be used in the input field|
|**`inline`** | _boolean_ |  |  | Indicates if the input is inline or not: see component principles|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`masked`** | _boolean_ |  |  | Indicates if the input is masked or not|
|**`max`** | _number_ |  |  | Maximum value for the input (type number)|
|**`min`** | _number_ |  |  | Minimum value for the input (type number)|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`step`** | _number_ |  |  | Step value for the input|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`type`** | `ODS_INPUT_TYPE` |  |  | Type of the input field|
|**`value`** | `OdsInputValue` | ✴️ |  | Value of the input field|

### OdsInputEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsClear`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsHide`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsReset`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<OdsCommonFieldValueChangeEventDetail>` | ✴️ |  | |

### OdsInputMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`formResetCallback`** | _void_ | ✴️ |  | |
|**`getValidity`** | `Promise<undefined` \| `OdsCommonFieldValidityState>` | ✴️ |  | return the element validity|
|**`hide`** | `Promise<void>` | ✴️ |  | |
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | `Promise<void>` | ✴️ |  | active the focus on the input in order to let the user write something|
|**`setTabindex`** | `Promise<void>` | ✴️ |  | set a custom tab index for easier navigation|
|**`stepDown`** | `Promise<void>` | ✴️ |  | |
|**`stepUp`** | `Promise<void>` | ✴️ |  | |

### OdsInputValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ | ✴️ |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`validity`** | `OdsCommonFieldValidityState` |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

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