* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsSelectAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ | ✴️ |  | The id to an external description|
|**`color`** | `ODS_THEME_COLOR_INTENT` | ✴️ |  | the primary color of the theme|
|**`defaultValue`** | `OdsInputValue` | ✴️ |  | Its corresponding default value. It needs to match with one option so the option will be selected|
|**`disabled`** | _boolean_ | ✴️ |  | indicates if the select is entirely disabled.it means no interactions (hover, click, focus, etc)|
|**`error`** | _boolean_ |  |  | indicates if the select has an error.|
|**`inline`** | _boolean_ | ✴️ |  | full width or not: see component principles|
|**`name`** | _string_ |  |  | name of the select field|
|**`opened`** | _boolean_ |  |  | opened or not|
|**`required`** | _boolean_ | ✴️ |  | indicates if a value has to be selected|
|**`size`** | `md` | ✴️ |  | size: see component principles|
|**`value`** | `OdsInputValue` | ✴️ |  | Its corresponding value. It needs to correspond to the value of the option|

### OdsSelectEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on select blur|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on select focus|
|**`odsValueChange`** | `EventEmitter<OdsSelectValueChangeEventDetail>` | ✴️ |  | Emitted when the value has changed|

### OdsSelectMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | erase the current selection|
|**`getValidity`** | `Promise<OdsValidityState>` | ✴️ |  | get the validity state|
|**`reset`** | `Promise<void>` | ✴️ |  | reset the value to the initial one (default value)|
|**`setFocus`** | `Promise<void>` | ✴️ |  | focus the element|
|**`setInputTabindex`** | `Promise<void>` | ✴️ |  | set tab index on the component|
|**`validate`** | `Promise<OdsValidityState>` | ✴️ |  | check that the select is valid or not.In case of required field, the validation will check the entered valueand set the field in error if it is not fulfilled|

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
|**`name`** | _string_ |  |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`selection`** | `undefined` \| `OsdsSelectOption` | ✴️ |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |

## Types

### ODS_SELECT_SIZE
|  |
|:---:|
| `md` |