* [**Interfaces**](#interfaces)
* [**Classes**](#classes)

## Interfaces

### OdsSearchBarAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | Indicates if the search-bar is contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | Indicates if the search-bar is disabled or not: see component principles|
|**`loading`** | _boolean_ |  |  | Indicates if the search-bar is in loading state or not|
|**`options`** | _unknown_ |  |  | List of the options on the select|
|**`placeholder`** | _string_ |  |  | Placeholder text for the search-bar|
|**`value`** | _string_ | ✴️ |  | Current value of the search-bar|

### OdsSearchBarEvent
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsSearchSubmit`** | `EventEmitter<reflection>` | ✴️ |  | Send event with the input value when click on button search ou with keyboard navigation|

## Classes

### OsdsSearchBar