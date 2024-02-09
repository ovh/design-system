* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsTimepickerAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`currentTimezone`** | `ODS_TIMEZONE` |  |  | Defines the timezone to show by default in the select|
|**`defaultValue`** | `undefined` \| `string` | ✴️ |  | Defines the default value|
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`inline`** | _boolean_ |  |  | Defines if the Timepicker should be displayed inline or not|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`step`** | _number_ |  |  | Step value for the input|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`timezones`** | `string` \| `ODS_TIMEZONE[]` |  |  | Defines the timezones available to show in the select|
|**`value`** | `OdsInputValue` | ✴️ |  | Value of the input field|
|**`withSeconds`** | _boolean_ |  |  | Defines if the Timepicker should be displayed seconds or not|

### OdsTimepickerEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsClear`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsReset`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<T>` | ✴️ |  | |

### OdsTimepickerMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`formResetCallback`** | _void_ | ✴️ |  | |
|**`getValidity`** | `Promise<undefined` \| `OdsCommonFieldValidityState>` | ✴️ |  | return the element validity|
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|

### OdsTimepickerValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ | ✴️ |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`validity`** | `OdsCommonFieldValidityState` |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

## Types

### ODS_TIMEZONE
|  |
|:---:|
| `UTC` |
| `UTC1` |
| `UTC10` |
| `UTC11` |
| `UTC12` |
| `UTC2` |
| `UTC3` |
| `UTC4` |
| `UTC5` |
| `UTC6` |
| `UTC7` |
| `UTC8` |
| `UTC9` |
| `UTC_1` |
| `UTC_10` |
| `UTC_11` |
| `UTC_12` |
| `UTC_2` |
| `UTC_3` |
| `UTC_4` |
| `UTC_5` |
| `UTC_6` |
| `UTC_7` |
| `UTC_8` |
| `UTC_9` |
