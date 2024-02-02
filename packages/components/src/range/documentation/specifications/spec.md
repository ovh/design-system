* [**Interfaces**](#interfaces)

## Interfaces

### OdsRangeAttribute
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`color`** | `ODS_THEME_COLOR_INTENT` |  |  | Range color theme|
|**`defaultValue`** | `OdsRangeValue` | ✴️ |  | Default value of the range|
|**`disabled`** | _boolean_ |  |  | Indicate if the range is entirely disabled.It means no interaction is possible (hover, click, focus, etc)|
|**`error`** | _boolean_ |  |  | If the range is in error or not|
|**`errorStateControl`** | `OdsErrorStateControl` |  |  | Check range error state|
|**`forbiddenValues`** | `OdsFormForbiddenValues` | ✴️ |  | The range forbidden values|
|**`formControl`** | `OdsFormControl` |  |  | The form control for range|
|**`id`** | _string_ |  |  | The range id|
|**`inline`** | _boolean_ |  |  | inline unit for range width|
|**`max`** | _number_ |  |  | The range maximum value|
|**`min`** | _number_ |  |  | The range minimum value|
|**`name`** | _string_ |  |  | Name of the range field|
|**`step`** | _number_ |  |  | The range step value|
|**`value`** | `OdsRangeValue` | ✴️ |  | The range value|

### OdsRangeEvent
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`odsBlur`** | `EventEmitter<void>` | ✴️ |  | Event triggered on textarea blur|
|**`odsFocus`** | `EventEmitter<void>` | ✴️ |  | Event triggered on textarea focus|
|**`odsValueChange`** | `EventEmitter<OdsRangeValueChangeEventDetail>` | ✴️ |  | the range value changed|

### OdsRangeValueChangeEventDetail
|Name | Type | Required | Default | Description|
|---|---|:---:|---|---|
|**`name`** | _string_ |  |  | |
|**`oldValue`** | `OdsRangeValue` |  |  | |
|**`validity`** | `OdsValidityState` | ✴️ |  | |
|**`value`** | `OdsRangeValue` |  |  | |