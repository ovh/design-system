* [**Interfaces**](#interfaces)

## Interfaces

### OdsAutocompleteAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`ariaLabel`** | `undefined` \| `string` | ✴️ |  | The corresponding aria-label describing its content|
|**`ariaLabelledby`** | _string_ | ✴️ |  | The ID to an external description|
|**`clearable`** | _boolean_ | ✴️ |  | Defines if the Autocomplete should be clearable or not (displays a clear button)|
|**`defaultValue`** | _string_ | ✴️ |  | Default value of the Autocomplete|
|**`disabled`** | _boolean_ | ✴️ |  | Defines if the Autocomplete should be disabled or not (lower opacity and not interactable)|
|**`error`** | _boolean_ | ✴️ |  | Defines if the Autocomplete should display an error state|
|**`icon`** | `ODS_ICON_NAME` |  |  | Defines if the Autocomplete should display an icon in the input field|
|**`inline`** | _boolean_ | ✴️ |  | Indicates if the Autocomplete is full width or not: see component principles|
|**`isLoading`** | _boolean_ | ✴️ |  | Defines if the Autocomplete should display a loading spinner in the dropdown|
|**`minimumNumberOfCharacters`** | _number_ | ✴️ |  | Defines the Autocomplete's minimum number of characters to open the dropdown|
|**`name`** | _string_ |  |  | Name of the Autocomplete field|
|**`opened`** | _boolean_ | ✴️ |  | Defines if the Autocomplete dropdown is opened or not|
|**`placeholder`** | _string_ |  |  | Defines if the Autocomplete should display a placeholder message|
|**`required`** | _boolean_ | ✴️ |  | Defines if a value has to be selected or not|
|**`value`** | _string_ | ✴️ |  | Defines the Autocomplete's value|

### OdsAutocompleteEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on Autocomplete's blur|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on Autocomplete's focus|
|**`odsValueChange`** | `EventEmitter<OdsAutocompleteValueChangeEventDetail>` | ✴️ |  | Event emitted on value change|

### OdsAutocompleteMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`clear`** | `Promise<void>` | ✴️ |  | Erase the current selection|
|**`getValidity`** | `Promise<OdsValidityState>` | ✴️ |  | Get the validity state|
|**`reset`** | `Promise<void>` | ✴️ |  | Reset the value to the initial one (default value)|
|**`setFocus`** | `Promise<void>` | ✴️ |  | Focus the element|
|**`setInputTabindex`** | `Promise<void>` | ✴️ |  | Set tab index on the component|
|**`validate`** | `Promise<OdsValidityState>` | ✴️ |  | check if the Autocomplete is valid.In case of required field, the validation will check the entered valueand set the field in error if it is not fulfilled|

### OdsAutocompleteValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ |  |  | |
|**`oldValue`** | `OdsInputValue` |  |  | |
|**`selection`** | `undefined` \| `OsdsSelectOption` | ✴️ |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `OdsInputValue` | ✴️ |  | |