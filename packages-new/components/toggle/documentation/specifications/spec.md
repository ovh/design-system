* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsToggleAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ |  |  | Toggle is checked or not|
|**`checking`** | _boolean_ |  |  | Awaiting a change of checked state|
|**`color`** | `OdsThemeColorIntent` |  |  | Toggle color theme|
|**`contrasted`** | _boolean_ |  |  | Toggle is in contrasted mode or not|
|**`disabled`** | _boolean_ |  |  | Toggle is disabled or not|
|**`interactive`** | _boolean_ |  |  | If the toggle can have interactive pseudo-classes or not|

### OdsToggleBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`beforeRender`** | _void_ | ✴️ |  | before render component functionshould be called before component renderit have to check the validity of attributes.|

## Classes

### OdsToggleController
_common controller logic for toggle component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **validateAttributes**() => _unknown_



### OdsToggleMock

## Type alias

### OdsToggle

interface description of all implementation of `ods-toggle`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsToggleEvents

### OdsToggleMethods

### OdsToggleAttributes

> _Based on `OdsComponentAttributes`_

## Variables

### odsToggleDefaultAttributes
`OdsToggleAttributes`