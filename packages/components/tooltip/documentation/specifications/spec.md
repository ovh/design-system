* [**Interfaces**](#interfaces)
* [**Types**](#types)

## Interfaces

### OdsTooltipAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`variant`** | `ODS_TOOLTIP_VARIANT` |  |  | with or without visible tip: see component principles|

### OdsTooltipMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`closeSurface`** | `Promise<void>` | ✴️ |  | Close the surface|
|**`setTabindex`** | `Promise<void>` | ✴️ |  | set tab index on the component|

## Types

### ODS_TOOLTIP_VARIANT
|  |
|:---:|
| `standard` |
| `tip` |