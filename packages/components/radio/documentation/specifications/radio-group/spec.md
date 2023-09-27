* [**Interfaces**](#interfaces)
* [**Classes**](#classes)

## Interfaces

### OdsRadioGroupAttribute
|name | Type | Required | Default | Description|
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
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsDisabledChange`** | `EventEmitter<reflection>` | ✴️ |  | |
|**`odsValueChange`** | `EventEmitter<reflection>` | ✴️ |  | Emitted when the value has changed.|

### OdsRadioGroupMethod
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`getRadios`** | `Promise<array>` | ✴️ |  | |

### OdsRadioGroupValueChangeEventDetail
|name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`newValue`** | _string_ | ✴️ |  | |
|**`previousValue`** | _string_ | ✴️ |  | |

## Classes

### OsdsRadioGroup
#### Methods
> **getRadios**() => `Promise<array>`


> **registerRadio**(`radio`: `OsdsRadio`) => `Promise<void>`

Name | Type | Description 
---|---|---
**radio** | `OsdsRadio` | 
> **unregisterRadio**(`radio`: `OsdsRadio`) => `Promise<void>`

Name | Type | Description 
---|---|---
**radio** | `OsdsRadio` | 
> **updateState**(`__namedParameters`: _unknown_) => `Promise<void>`

Name | Type | Description 
---|---|---
**__namedParameters** | _unknown_ | 