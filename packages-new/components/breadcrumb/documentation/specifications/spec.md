* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsBreadcrumbAttributeItem
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`href`** | _string_ | ✴️ |  | Item link to redirect to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to display|
|**`label`** | _string_ |  |  | Text to display|

### OdsBreadcrumbAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`items`** | `string` \| `undefined` | ✴️ |  | List of breadcrumb items to display|

### OdsBreadcrumbBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`el`** | `HTMLElement` | ✴️ |  | Reference to the host element.|
|**`componentWillLoad`** | _void_ | ✴️ |  | Items initialisation on first render|
|**`onBreadcrumbItemCollapsedClick`** | _void_ | ✴️ |  | Receive and handle a collapsed item click event.|

### OdsBreadcrumbItemAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`href`** | _string_ | ✴️ |  | Item link to redirect to|
|**`icon`** | `ODS_ICON_NAME` |  |  | Icon to display|
|**`label`** | _string_ |  |  | Text to display|

### OdsBreadcrumbItemEvents
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBreadcrumbItemCollapsedClick`** | _void_ | ✴️ |  | Event triggered on collapsed item click|

## Classes

### OdsBreadcrumbController
_common controller logic for component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **getBreadcrumbItems**() => _unknown_



### OdsBreadcrumbItemController
_common controller logic for component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._


## Type alias

### OdsBreadcrumb

interface description of all implementation of `ods-breadcrumb`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsBreadcrumbItem

interface description of all implementation of `ods-breadcrumb-item`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsBreadcrumbAttributes

> _Based on `OdsComponentAttributes`_

### OdsBreadcrumbEvents

> _Based on `OdsComponentEvents`_

### OdsBreadcrumbItemAttributes

> _Based on `OdsComponentAttributes`_

### OdsBreadcrumbItemEvents

> _Based on `OdsComponentEvents`_

### OdsBreadcrumbItemMethods

> _Based on `OdsComponentMethods`_

### OdsBreadcrumbMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsBreadcrumbDefaultAttributes
`OdsBreadcrumbAttributes`

### odsBreadcrumbItemDefaultAttributes
`OdsBreadcrumbItemAttributes`