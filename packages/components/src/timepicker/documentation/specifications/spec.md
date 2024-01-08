* [**Interfaces**](#interfaces)

## Interfaces

### OdsTimepickerAttribute
| Name                   | Type                                     | Required | Default | Description                                                                      |
|------------------------|------------------------------------------|:---:|---|----------------------------------------------------------------------------------|
| **`clearable`**        | _boolean_                                |  |  | Defines if the Timepicker should be clearable or not (displays a clear button)   |
| **`currentTimezone`** | _ODS_TIMEZONE_                           |  |  | Defines if the Timepicker should be show a select with a timezone set by default |
| **`disabled`**         | _boolean_                                |  |  | Defines the Timepicker's disabled state                                          |
| **`error`**            | _boolean_                                |  |  | Defines the Timepicker's error state                                             |
| **`inline`**           | _boolean_                                |  |  | Defines if the Timepicker should be displayed inline or not                      |
| **`timezones`** | _ODS_TIMEZONE[] \| ODS_TIMEZONES_PRESET_ |  |  | Defines the timezones available to show in the select |
| **`value`**            | _string_ \| _null_                       |  |  | Defines the Timepicker's value                                                   |
| **`withSeconds`**      | _boolean_                                |  |  | Defines if the Timepicker should be displayed with seconds or not                |

### OsdsTimepicker