* [**Interfaces**](#interfaces)
* [**Types**](#types)
* [**Classes**](#classes)

## Interfaces

### OdsMessageAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Message color theme|
|**`contrasted`** | _boolean_ |  |  | Message is in contrasted mode or not|
|**`icon`** | `ODS_ICON_NAME` |  |  | The icon prefix|
|**`inline`** | _boolean_ |  |  | Message as inline|
|**`removable`** | _boolean_ |  |  | If the message can be removed or not|
|**`type`** | `ODS_MESSAGE_TYPE` |  |  | The message type|

### OdsMessageEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsRemoveClick`** | `EventEmitter<void>` | ✴️ |  | Event triggered on removable icon click|

## Types

### ODS_MESSAGE_TYPE
|  |
|:---:|
| `error` |
| `info` |
| `success` |
| `warning` |

## Classes

### OsdsMessage