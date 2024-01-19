* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsDatepickerAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`datesDisabled`** | Date[] |  |  | Defines the Datepicker's disabled dates|
|**`daysOfWeekDisabled`** | ODS_DATEPICKER_DAY[] |  |  | Defines the Datepicker's disabled days of the week (monday, tuesday...)|
|**`defaultValue`** | `undefined` \| `Date` |  |  | Default value of the input|
|**`disabled`** | _boolean_ |  |  | Defines if the Datepicker should be disabled or not (lower opacity and not interactable)|
|**`error`** | _boolean_ |  |  | Defines if the Datepicker should display an error message|
|**`format`** | _string_ |  |  | Defines which format the Datepicker should be applying (supported formats: https://mymth.github.io/vanillajs-datepicker/#/date-string+format?id=date-format)|
|**`inline`** | _boolean_ |  |  | Defines if the Datepicker should be displayed inline or not|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`locale`** | `ODS_LOCALE` |  |  | Defines the locale to use|
|**`maxDate`** | `undefined` \| `Date` |  |  | Defines the Datepicker's maximum selectable date|
|**`minDate`** | `undefined` \| `Date` |  |  | Defines the Datepicker's minimum selectable date|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`showSiblingsMonthDays`** | _boolean_ |  |  | Defines if the Datepicker should display others month days|
|**`step`** | _number_ |  |  | Step value for the input|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`value`** | `OdsInputValue` | ✴️ |  | Value of the input field|

### OdsDatepickerEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsDatepickerBlur`** | `EventEmitter<void>` | ✴️ |  | Triggered on blur|
|**`odsDatepickerFocus`** | `EventEmitter<void>` | ✴️ |  | Triggered on focus|
|**`odsDatepickerValueChange`** | `EventEmitter<OdsDatepickerValueChangeEventDetail>` | ✴️ |  | Triggered on value change|

### OdsDatepickerValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`formattedValue`** | _string_ |  |  | |
|**`name`** | _string_ |  |  | |
|**`oldValue`** | `undefined` \| `Date` |  |  | |
|**`value`** | `undefined` \| `Date` |  |  | |

## Types

### ODS_DATEPICKER_DAY
|  |
|:---:|
| `friday` |
| `monday` |
| `saturday` |
| `sunday` |
| `thursday` |
| `tuesday` |
| `wednesday` |

### ODS_DATEPICKER_LOCALE
|  |
|:---:|
| `AR` |
| `BG` |
| `CS` |
| `DA` |
| `DE` |
| `EL` |
| `EN` |
| `EO` |
| `ES` |
| `ET` |
| `EU` |
| `FI` |
| `FR` |
| `HR` |
| `HU` |
| `HY` |
| `IT` |
| `JA` |
| `KO` |
| `LT` |
| `NL` |
| `NO` |
| `PL` |
| `PT` |
| `RO` |
| `RU` |
| `SL` |
| `SV` |
| `TH` |
| `UK` |
| `ZH` |