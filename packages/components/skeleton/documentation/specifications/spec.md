* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsSkeletonAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`flex`** | _boolean_ |  |  | Wether or not skeleton size fill its parent|
|**`randomized`** | _boolean_ |  |  | Wether or not skeleton size is randomized|
|**`size`** | `OdsSkeletonSize` |  |  | Skeleton size|

### OdsSkeletonBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`hostElement`** | `Host` | ✴️ |  | reference to the host element of the component|
|**`afterInit`** | _void_ | ✴️ |  | method executed after initialization of component(`componentDidLoad` with stenciljs for instance).this method has to call OdsSkeletonController.afterInit|

## Types

### OdsSkeletonSize
|  |
|:---:|
| `lg` |
| `md` |
| `sm` |
| `xl` |
| `xs` |

## Classes

### OdsSkeletonController
_common controller logic for skeleton component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **afterInit**() => _unknown_



## Type alias

### OdsSkeleton

interface description of all implementations of `ods-skeleton`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsSkeletonAttributes

> _Based on `OdsComponentAttributes`_

### OdsSkeletonEvents

> _Based on `OdsComponentEvents`_

### OdsSkeletonMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsSkeletonDefaultAttributes
`OdsSkeletonAttributes`