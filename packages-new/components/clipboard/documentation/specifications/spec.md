* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsClipboardAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`disabled`** | _boolean_ |  |  | Disabled the input, the focus, and the tooltip|
|**`flex`** | _boolean_ |  |  | Indicates if the input is full width or not: see component principles|
|**`value`** | _string_ | ✴️ |  | Input text value|

### OdsClipboardEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsClipboardCopied`** | _string_ | ✴️ |  | |

## Classes

### OdsClipboardController
#### Methods
> **handlerClick**() => _unknown_



## Type alias

### OdsClipboard

interface description of all implementation of `ods-clipboard`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsClipboardAttributes

> _Based on `OdsComponentAttributes`_

### OdsClipboardEvents

> _Based on `OdsComponentEvents`_

### OdsClipboardMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsClipboardDefaultAttributes
`OdsClipboardAttributes`