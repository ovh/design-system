* [**Interfaces**](#interfaces)

## Interfaces

### OdsTimepickerAttribute
| Name                   | Type                                    | Required | Default | Description                                                                      |
|------------------------|-----------------------------------------|:---:|---|----------------------------------------------------------------------------------|
| **`clearable`**        | _boolean_                               |  |  | Defines if the Timepicker should be clearable or not (displays a clear button)   |
| **`currentTimezone`** | _ODS_TIMEZONE_                          |  |  | Defines if the Timepicker should be show a select with a timezone set by default |
| **`disabled`**         | _boolean_                               |  |  | Defines the Timepicker's disabled state                                          |
| **`error`**            | _boolean_                               |  |  | Defines the Timepicker's error state                                             |
| **`inline`**           | _boolean_                               |  |  | Defines if the Timepicker should be displayed inline or not                      |
| **`timezones`** | _ODS_TIMEZONE[] \| ODS_TIMEZONES_PRESET_ |  |  | Defines the timezones available to show in the select |
| **`value`**            | _OdsInputValue_                   |  |  | Defines the Timepicker's value                                                   |
| **`withSeconds`**      | _boolean_                               |  |  | Defines if the Timepicker should be displayed with seconds or not                |

### OdsTimepickerEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsClear`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsHide`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsReset`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<OdsCommonFieldValueChangeEventDetail>` | ✴️ |  | |

### OdsTimepickerMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`formResetCallback`** | _void_ | ✴️ |  | |
|**`getValidity`** | `Promise<undefined` \| `OdsCommonFieldValidityState>` | ✴️ |  | |
|**`hide`** | `Promise<void>` | ✴️ |  | |
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|

### OdsTimepickerValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ | ✴️ |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`validity`** | `OdsCommonFieldValidityState` |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |


### OsdsTimepicker