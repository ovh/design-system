* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsLinkAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | Link color theme|
|**`contrasted`** | _boolean_ |  |  | Link design as contrasted version|
|**`disabled`** | _boolean_ |  |  | Link should be disabled or not|
|**`download`** | _string_ |  |  | Link as download source|
|**`href`** | _string_ |  |  | Link URL|
|**`referrerpolicy`** | `OdsLinkReferrerpolicy` |  |  | Link referrer policy|
|**`rel`** | `OdsHTMLAnchorElementRel` |  |  | Link relationship|
|**`target`** | `OdsHTMLAnchorElementTarget` |  |  | Link target typeIf href is set the default value `_self` is set|
|**`type`** | _string_ |  |  | Link type (for download source)|

### OdsLinkBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`beforeRender`** | _void_ | ✴️ |  | before render component functionshould be called before component renderit have to check the validity of attributes.|

## Types

### OdsLinkReferrerpolicy
|  |
|:---:|
| `no-referrer` |
| `no-referrer-when-downgrade` |
| `origin` |
| `origin-when-cross-origin` |
| `same-origin` |
| `strict-origin-when-cross-origin` |
| `unsafe-url` |

## Classes

### OdsLinkController
_common controller logic for link component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **validateAttributes**() => _unknown_



### OdsLinkMock

## Type alias

### OdsLink

interface description of all implementation of `ods-link`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsLinkAttributes

> _Based on `OdsComponentAttributes`_

### OdsLinkEvents

> _Based on `OdsComponentEvents`_

### OdsLinkMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsLinkDefaultAttributes
`OdsLinkAttributes`