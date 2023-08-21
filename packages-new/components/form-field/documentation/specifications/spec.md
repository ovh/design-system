* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsFormFieldAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`error`** | _string_ |  |  | Indicates if the Form Field shows error or not|
|**`flex`** | _boolean_ |  |  | Indicates if the Form Field is full width or not: see component principles|

## Classes

### OdsFormFieldController
_common controller logic for cmpnt component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsFormField

interface description of all implementation of `ods-form-field`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsFormFieldAttributes

> _Based on `OdsComponentAttributes`_

### OdsFormFieldEvents

> _Based on `OdsComponentEvents`_

### OdsFormFieldMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsFormFieldDefaultAttributes
`OdsFormFieldAttributes`