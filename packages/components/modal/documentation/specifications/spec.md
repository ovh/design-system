* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsModalAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `OdsThemeColorIntent` | ✴️ |  | Color of the modal's header background|
|**`dismissible`** | _boolean_ |  |  | Defines if the modal is dismissible (displays a close button)|
|**`headline`** | _string_ |  |  | Text displayed as the modal's headline|
|**`masked`** | _boolean_ |  |  | Defines if the modal is masked|

### OdsModalMethods
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`close`** | _void_ | ✴️ |  | close the modal|
|**`open`** | _void_ | ✴️ |  | open the modal|

## Classes

### OdsModalController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **close**() => _unknown_


> **open**() => _unknown_


> **validateAttributes**() => _unknown_



## Type alias

### OdsModal

interface description of all implementation of `ods-modal`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsModalAttributes

> _Based on `OdsComponentAttributes`_

### OdsModalEvents

> _Based on `OdsComponentEvents`_

### OdsModalMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsModalDefaultAttributes
`OdsModalAttributes`