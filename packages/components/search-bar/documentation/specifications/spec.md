* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsSearchBarAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | Indicates if the search-bar is contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | Indicates if the search-bar is disabled or not: see component principles|
|**`loading`** | _boolean_ |  |  | Indicates if the search-bar is in loading state or not|
|**`options`** | _unknown_ |  |  | List of the options on the select|
|**`placeholder`** | _string_ |  |  | Placeholder text for the search-bar|
|**`value`** | _string_ | ✴️ |  | Current value of the search-bar|

### OdsSearchBarEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsSearchSubmit`** | _unknown_ | ✴️ |  | Send event with the input value when click on button search ou with keyboard navigation|

## Classes

### OdsSearchBarController

## Type alias

### OdsSearchBar

interface description of all implementation of `ods-search-bar`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSearchBarAttributes

> _Based on `OdsComponentAttributes`_

### OdsSearchBarEvents

> _Based on `OdsComponentEvents`_

### OdsSearchBarMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsSearchBarDefaultAttributes
`OdsSearchBarAttributes`