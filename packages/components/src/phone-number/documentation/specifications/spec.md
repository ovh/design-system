* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsPhoneNumberAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | |
|**`ariaLabelledby`** | _string_ |  |  | ID of the element that labels the input|
|**`clearable`** | _boolean_ |  |  | Ability to clear the input value|
|**`countries`** | `string` \| `ODS_COUNTRY_ISO_CODE[]` |  |  | A specific subset of countries to display in the select instead of the whole list|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Default value of the input|
|**`disabled`** | _boolean_ | ✴️ |  | Indicates if the input is disabled or not: see component principles|
|**`error`** | _boolean_ | ✴️ |  | Indicates if the input shows error or not|
|**`forbiddenValues`** | OdsInputValue[] |  |  | List of forbidden values for the input|
|**`isoCode`** | `ODS_COUNTRY_ISO_CODE` |  |  | Select value|
|**`label`** | _string_ |  |  | Label of the input field|
|**`loading`** | _boolean_ |  |  | Indicates if the input is in loading state or not|
|**`locale`** | `ODS_LOCALE` |  |  | This is the locale to use to translate the countries names|
|**`name`** | _string_ | ✴️ |  | Name of the input field|
|**`placeholder`** | _string_ |  |  | Placeholder text for the input|
|**`prefixValue`** | _string_ |  |  | Text before the input value|
|**`readOnly`** | _boolean_ |  |  | Indicates if the input is read-only or not|
|**`required`** | _boolean_ |  |  | Indicates if the input is required or not|
|**`tabindex`** | _number_ |  |  | Tabindex for the input|
|**`value`** | `OdsInputValue` | ✴️ |  | Type of the input field|

### OdsPhoneNumberEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsClear`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsReset`** | `EventEmitter<void>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<OdsPhoneNumberValueChangeEventDetail>` | ✴️ |  | |

### OdsPhoneNumberMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | empty the value|
|**`formResetCallback`** | _void_ | ✴️ |  | |
|**`getValidity`** | `Promise<undefined` \| `OdsCommonFieldValidityState>` | ✴️ |  | |
|**`reset`** | `Promise<void>` | ✴️ |  | restore the value to the initial state|
|**`setFocus`** | `Promise<void>` | ✴️ |  | active the focus on the input in order to let the user write something|

### OdsPhoneNumberValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`isoCode`** | `ODS_COUNTRY_ISO_CODE` |  |  | |
|**`name`** | _string_ | ✴️ |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`validity`** | `OdsCommonFieldValidityState` |  |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

## Types

### ODS_PHONE_NUMBER_COUNTRY_PRESET
|  |
|:---:|
| `All` |