* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsTooltipAttribute
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`variant`** | `ODS_TOOLTIP_VARIANT` |  |  | with or without visible tip: see component principles|

### OdsTooltipMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`closeSurface`** | `Promise<void>` | ✴️ |  | Close the surface|
|**`setTabindex`** | `Promise<void>` | ✴️ |  | set tab index on the component|

## Types

### ODS_TOOLTIP_VARIANT
|  |
|:---:|
| `standard` |
| `tip` |

## Classes

### OsdsTooltip