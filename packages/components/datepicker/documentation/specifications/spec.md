* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsDatepickerAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clearable`** | _boolean_ |  |  | Defines if the Datepicker should be clearable or not (displays a clear button)|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Defines the Datepicker's color (see component principles)|
|**`datesDisabled`** | Date[] |  |  | Defines the Datepicker's disabled dates|
|**`daysOfWeekDisabled`** | ODS_DATEPICKER_DAY[] |  |  | Defines the Datepicker's disabled days of the week (monday, tuesday...)|
|**`disabled`** | _boolean_ |  |  | Defines if the Datepicker should be disabled or not (lower opacity and not interactable)|
|**`error`** | _boolean_ |  |  | Defines if the Datepicker should display an error message|
|**`format`** | _string_ |  |  | Defines which format the Datepicker should be applying (supported formats: https://mymth.github.io/vanillajs-datepicker/#/date-string+format?id=date-format)|
|**`inline`** | _boolean_ |  |  | Defines if the Datepicker should be displayed inline or not|
|**`locale`** | `ODS_LOCALE` |  |  | Defines the locale to use|
|**`maxDate`** | `undefined` \| `Date` |  |  | Defines the Datepicker's maximum selectable date|
|**`minDate`** | `undefined` \| `Date` |  |  | Defines the Datepicker's minimum selectable date|
|**`placeholder`** | _string_ |  |  | Defines if the Datepicker should display a placeholder message|
|**`value`** | `undefined` \| `Date` |  |  | Defines the Datepicker's value (Date object)|

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

## Classes

### OsdsDatepicker