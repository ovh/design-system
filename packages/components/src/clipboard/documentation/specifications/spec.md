* [**Interfaces**](#interfaces)

## Interfaces

### OdsClipboardAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`disabled`** | _boolean_ |  |  | Disabled the input, the focus, and the tooltip|
|**`inline`** | _boolean_ |  |  | Indicates if the input is full width or not: see component principles|
|**`value`** | _string_ | ✴️ |  | Input text value|

### OdsClipboardEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsClipboardCopied`** | `EventEmitter<string>` | ✴️ |  | |

### OdsClipboardMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`closeSurface`** | `Promise<void>` | ✴️ |  | Close the surface|