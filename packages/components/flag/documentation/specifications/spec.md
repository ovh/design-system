* [**Interfaces**](#interfaces)
* [**Classes**](#classes)
* [**Type alias**](#type-alias)
* [**Variables**](#variables)

## Interfaces

### OdsFlagAttributes
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`assetPath`** | `undefined` \| `string` | ✴️ |  | override the `ODS` directory path of the assets.if not set, the configured path in `ODS` will be used.|
|**`iso`** | `undefined` \| `ODS_COUNTRY_ISO_CODE` | ✴️ |  | Flag ISO country code|
|**`lazy`** | _boolean_ | ✴️ |  | allow to lazy load the content only when it's visible|
|**`src`** | `undefined` \| `string` | ✴️ |  | override with custom src to the svg file.|

### OdsFlagBehavior
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`hostElement`** | `Host` | ✴️ |  | reference to the host element of the component|
|**`getAssetPath`** | _string_ | ✴️ |  | get the asset directory path in witch the content is serve.could be like `build/` or empty.in addition, the `ODS` asset path will be used.|
|**`load`** | _void_ | ✴️ |  | trigger the content load.should be triggered when `iso`, `assetPath` and `src` attributes changed.should call controller's method `load` and change the svg content with the one received.should define the `aria-label` to use with `iso` code.|
|**`onDestroy`** | _void_ | ✴️ |  | clean up thing.should call controller's method `onDestroy`|
|**`onInit`** | _void_ | ✴️ |  | initialization of the component.should call the controller's `onInit` method and store the state of visibility.|

## Classes

### OdsFlagController
_common controller logic for flag component used by the different implementations._
_it contains all the glue between framework implementation and the third party service._

#### Methods
> **load**() => _unknown_


> **onDestroy**() => _unknown_


> **onInit**() => _unknown_


> **validateISO**() => _unknown_



### OdsFlagMock

## Type alias

### OdsFlag

interface description of all implementation of `ods-flag`.
each implementation must have defined events, methods, attributes
and one controller for the common behavior logic

> - `OdsComponentGenericMethods`

> - `OdsComponentGenericEvents`

### OdsFlagAttributes

> _Based on `OdsComponentAttributes`_

### OdsFlagEvents

> _Based on `OdsComponentEvents`_

### OdsFlagMethods

> _Based on `OdsComponentMethods`_

## Variables

### odsFlagDefaultAttributes
`OdsFlagAttributes`