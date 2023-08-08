* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsButtonAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`circle`** | _boolean_ |  |  | use a circle shape|
|**`color`** | `OdsThemeColorIntent` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled or not: see component principles|
|**`download`** | _string_ |  |  | Button with href as download source|
|**`flex`** | _boolean_ |  |  | full width or not: see component principles|
|**`href`** | _string_ |  |  | use a button as a link with `<a>` element|
|**`rel`** | `OdsHTMLAnchorElementRel` |  |  | Button with href relationship|
|**`size`** | `OdsButtonSize` |  |  | size: see component principles|
|**`target`** | `OdsHTMLAnchorElementTarget` |  |  | link target if we are in a link-mode (using `href` attribute)|
|**`type`** | `OdsButtonType` |  |  | type of the vanilla button|
|**`variant`** | `OdsButtonVariant` |  |  | used design aspect|

### OdsButtonBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`beforeRender`** | _void_ | ✴️ |  | before render component functionshould be called before component renderit have to check the validity of attributes.|
|**`handleClick`** | _void_ | ✴️ |  | Called after a click is done on the component.|
|**`handleKey`** | _void_ | ✴️ |  | Called after a keypress is done on the component.|

## Types

### OdsButtonSize
|  |
|:---:|
| `md` |
| `sm` |

### OdsButtonType
|  |
|:---:|
| `button` |
| `reset` |
| `submit` |

### OdsButtonVariant
|  |
|:---:|
| `flat` |
| `ghost` |
| `stroked` |

## Classes

### OdsButtonController
_common controller logic for button component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **handleClick**() => _unknown_


> **handleKey**() => _unknown_


> **mutateAttributes**() => _unknown_


> **validateAttributes**() => _unknown_



### OdsButtonMock

## Type alias

### OdsButton

interface description of all implementation of `ods-button`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsButtonAttributes

> _Based on `OdsComponentAttributes`_

### OdsButtonEvents

> _Based on `OdsComponentEvents`_

### OdsButtonMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsButtonDefaultAttributes
`OdsButtonAttributes`