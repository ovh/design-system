* [**Interfaces**](#interfaces)

## Interfaces

### OdsSearchBarAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | Indicates if the search-bar is contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | Indicates if the search-bar is disabled or not: see component principles|
|**`loading`** | _boolean_ |  |  | Indicates if the search-bar is in loading state or not|
|**`options`** | OdsSearchbarOption[] |  |  | List of the options on the select|
|**`placeholder`** | _string_ |  |  | Placeholder text for the search-bar|
|**`value`** | _string_ | ✴️ |  | Current value of the search-bar|

### OdsSearchBarEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on textarea blur|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on textarea focus|
|**`odsSearchSubmit`** | `EventEmitter<reflection>` | ✴️ |  | Send event with the input value when click on button search ou with keyboard navigation|
|**`odsValueChange`** | `EventEmitter<OdsInputValueChangeEvent>` | ✴️ |  | The textarea value changed|

### OdsSearchbarOption
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`label`** | _string_ | ✴️ |  | |
|**`value`** | _string_ | ✴️ |  | |