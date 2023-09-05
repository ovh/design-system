* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsCodeAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`size`** | `md` |  |  | size: see component principles|

### OdsCodeBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`codeEl`** | `HTMLElement` | ✴️ |  | reference to the vanilla code element.|
|**`el`** | `HTMLElement` | ✴️ |  | reference to the host element.|
|**`beforeInit`** | _void_ | ✴️ |  | before init component function.should be called before component init.should autocomplete the content with an ods-button and an ods-icon|
|**`createCopyIconElement`** | `HTMLElement` | ✴️ |  | create an element that is an ods icon.Used when the OdsCodeController need to automatically create an icon.|
|**`emitCopy`** | _void_ | ✴️ |  | emit code copy|
|**`onCopyClick`** | _void_ | ✴️ |  | on click on the copy button, it should copy the contentby calling `controller.copyCode`|

### OdsCodeEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsCodeCopy`** | _void_ | ✴️ |  | Event triggered on code content copy|

## Types

### OdsCodeSize
|  |
|:---:|
| `md` |

## Classes

### OdsCodeController
_common controller logic for code component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **autocompleteCopySlot**() => _unknown_


> **copyCode**() => _unknown_



### OdsCodeMock

## Type alias

### OdsCode

interface description of all implementation of `ods-code`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsCodeMethods

### OdsCodeAttributes

> _Based on `OdsComponentAttributes`_

### OdsCodeEvents

> _Based on `OdsComponentEvents`_

## Variables

### odsCodeDefaultAttributes
`OdsCodeAttributes`

### odsCodeDefaultAttributesDoc
`OdsCodeAttributes`