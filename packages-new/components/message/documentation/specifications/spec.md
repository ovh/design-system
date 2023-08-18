* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsMessageAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` |  |  | Message color theme|
|**`contrasted`** | _boolean_ |  |  | Message is in contrasted mode or not|
|**`icon`** | `OdsIconName` |  |  | The icon prefix|
|**`inline`** | _boolean_ |  |  | Message as inline|
|**`removable`** | _boolean_ |  |  | If the message can be removed or not|
|**`type`** | `OdsMessageType` |  |  | The message type|

### OdsMessageBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`beforeInit`** | _void_ | ✴️ |  | before init component functionshould be called in connectedCallback stencil methodshould validate colorshould set color for type|
|**`removeClicked`** | _void_ | ✴️ |  | emit remove icon click event° @see OdsMessageController.onRemoveClicked|

### OdsMessageEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsRemoveClick`** | _void_ | ✴️ |  | Event triggered on removable icon click|

## Types

### OdsMessageType
|  |
|:---:|
| `error` |
| `info` |
| `success` |
| `warning` |

## Classes

### OdsMessageController
_common controller logic for chip component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **onRemoveClicked**() => _unknown_


> **setColorForType**() => _unknown_


> **validateColor**() => _unknown_



### OdsMessageMock
_Mocked generic implementation that represents an `OdsMessage`._
_it allows to test the controller with a stub implementation._


## Type alias

### OdsMessage

interface description of all implementation of `ods-chip`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsMessageAttributes

> _Based on `OdsComponentAttributes`_

### OdsMessageEvents

> _Based on `OdsComponentEvents`_

### OdsMessageMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsMessageDefaultAttributes
`OdsMessageAttributes`