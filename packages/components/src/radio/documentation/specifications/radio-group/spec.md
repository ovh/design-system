* [**Interfaces**](#interfaces)

## Interfaces

### OdsRadioGroupAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`defaultValue`** | _unknown_ |  |  | |
|**`disabled`** | _boolean_ | ✴️ |  | Radio-group should be disabled or not|
|**`name`** | _string_ |  |  | |
|**`required`** | _boolean_ |  |  | If the radio selection is required or not|
|**`value`** | _string_ | ✴️ |  | |
|**`afterSave`** | `Promise<void>` |  |  | |
|**`beforeSave`** | `Promise<void>` |  |  | |
|**`save`** | `Promise<void>` |  |  | save input allow to set a function that returns a promise.It is called before each time an update is performed and allowing to manage pessimistic update strategy|

### OdsRadioGroupEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsDisabledChange`** | `EventEmitter<unknown>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<unknown>` | ✴️ |  | Emitted when the value has changed.|

### OdsRadioGroupMethod
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getRadios`** | `Promise<OsdsRadio[]>` | ✴️ |  | |

### OdsRadioGroupValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`newValue`** | _string_ | ✴️ |  | |
|**`previousValue`** | _string_ | ✴️ |  | |