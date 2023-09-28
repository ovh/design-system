* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsSwitchAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | main color: see component principles|
|**`contrasted`** | _boolean_ |  |  | contrasted or not: see component principles|
|**`disabled`** | _boolean_ |  |  | disabled: see component principles|
|**`size`** | `ODS_SWITCH_SIZE` |  |  | size: see component principles|
|**`variant`** | `flat` |  |  | used design aspect|

### OdsSwitchChangedEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`current`** | _string_ | ✴️ |  | |
|**`previous`** | _string_ |  |  | |

### OdsSwitchEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsSwitchChanged`** | `EventEmitter<OdsSwitchChangedEventDetail>` | ✴️ |  | Event triggered on accordion toggle|

### OdsSwitchItemAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`checked`** | _boolean_ | ✴️ |  | The checked status of the SwitchItem|
|**`id`** | _string_ | ✴️ |  | Its corresponding id|
|**`value`** | _string_ | ✴️ |  | Its corresponding value|

## Types

### ODS_SWITCH_SIZE
|  |
|:---:|
| `md` |
| `sm` |

### ODS_SWITCH_VARIANT
|  |
|:---:|
| `flat` |

## Classes

### OsdsSwitch

### OsdsSwitchItem
#### Methods
> **setFocus**() => `Promise<void>`

